import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooksAxious/useAxiousSecure";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [packagesMap, setPackagesMap] = useState({}); // packageId => package details
  const axiosSecure = useAxiosSecure();

  // Fetch bookings + packages data
  const fetchBookings = async () => {
    if (!user?.email) return;

    try {
      // 1. Get bookings of logged in user
      const res = await axiosSecure.get(`/bookings?buyerEmail=${user.email}`);
      const bookingsData = res.data;
      setBookings(bookingsData);

      // 2. Get unique package IDs from bookings
      const uniquePackageIds = [
        ...new Set(bookingsData.map((b) => b.packageId)),
      ];
      const newPackagesMap = { ...packagesMap };

      // 3. Fetch package details for each unique packageId if not fetched yet
      await Promise.all(
        uniquePackageIds.map(async (id) => {
          if (!newPackagesMap[id]) {
            try {
              const pkgRes = await axiosSecure.get(`/packages/${id}`);
              newPackagesMap[id] = pkgRes.data;
            } catch (err) {
              console.error(`Failed to fetch package ${id}`, err);
            }
          }
        })
      );

      setPackagesMap(newPackagesMap);
    } catch (err) {
      console.error("Failed to load bookings", err);
      Swal.fire("Error", "Failed to load bookings", "error");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [user?.email]);

  if (!user) return <p>Please login to see your bookings</p>;

  // Confirm booking: status update to "completed"
  async function handleConfirm(bookingId) {
    try {
      const res = await axiosSecure.patch(`/bookings/${bookingId}`, {
        status: "completed",
      });
      if (res.data.modifiedCount > 0 || res.data.success) {
        Swal.fire("Success", "Booking confirmed successfully!", "success");
        fetchBookings();
      } else {
        Swal.fire("Warning", "No changes made", "warning");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to confirm booking", "error");
    }
  }

  // Delete booking
  async function handleDelete(bookingId) {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/bookings/${bookingId}`);
        if (res.data.deletedCount > 0 || res.data.success) {
          Swal.fire("Deleted!", "Booking has been deleted.", "success");
          fetchBookings();
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to delete booking", "error");
      }
    }
  }

  return (
    <div className="max-w-6xl mx-auto my-10 p-5">
      <h2 className="text-3xl font-bold mb-6">My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>Guide Name + Contact</th>
                <th>Departure Date</th>
                <th>Departure Location</th>
                <th>Destination</th>
                <th>Special Note</th>
                <th>Status</th>
                <th>Confirm</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => {
                const pkg = packagesMap[booking.packageId];
                return (
                  <tr key={booking._id}>
                    <td>
                      {pkg ? pkg.tourName || pkg.tour_name : "Loading..."}
                    </td>
                    <td>
                      {pkg
                        ? `${pkg.guideName || pkg.guide_name} (${
                            pkg.guideContact || pkg.contact_no || "N/A"
                          })`
                        : "-"}
                    </td>
                    <td>
                      {booking.bookingDate
                        ? new Date(booking.bookingDate).toLocaleDateString()
                        : "-"}
                    </td>

                    <td>
                      {pkg
                        ? pkg.departureLocation || pkg.departure_location
                        : "-"}
                    </td>
                    <td>{pkg ? pkg.destination : "-"}</td>
                    <td>{booking.specialNote || "-"}</td>
                    <td>
                      <span
                        className={`font-semibold ${
                          booking.status === "completed"
                            ? "text-green-600"
                            : booking.status === "pending"
                            ? "text-yellow-600"
                            : "text-gray-600"
                        }`}
                      >
                        {booking.status.charAt(0).toUpperCase() +
                          booking.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      {booking.status !== "completed" && (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => handleConfirm(booking._id)}
                        >
                          Confirm
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(booking._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
