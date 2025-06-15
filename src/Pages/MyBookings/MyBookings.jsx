import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const fetchBookings = () => {
    if (!user?.email) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/bookings?buyerEmail=${user.email}`)
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchBookings();
  }, [user?.email]);

  if (!user) return <p>Please login to see your bookings</p>;

  // Confirm Booking Function
  const handleConfirm = async (bookingId) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/bookings/${bookingId}`,
        { status: "confirmed" }
      );
      if (res.data.success || res.data.modifiedCount > 0) {
        Swal.fire("Success", "Booking confirmed successfully!", "success");
        fetchBookings();
      }
    } catch (error) {
      console.error("Error confirming booking", error);
      Swal.fire("Error", "Failed to confirm booking", "error");
    }
  };

  // Delete Booking Function
  const handleDelete = async (bookingId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `${import.meta.env.VITE_API_URL}/bookings/${bookingId}`
          );
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Booking has been deleted.", "success");
            fetchBookings();
          }
        } catch (err) {
          console.error("Delete error:", err);
          Swal.fire("Error", "Failed to delete booking", "error");
        }
      }
    });
  };

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
                <th>Price (BDT)</th>
                <th>Booking Date</th>
                <th>Special Note</th>
                <th>Status</th>
                <th>Confirm</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.tourName}</td>
                  <td>{booking.price}</td>
                  <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                  <td>{booking.specialNote || "-"}</td>
                  <td>
                    {booking.status === "pending" ? (
                      <span className="text-yellow-600 font-semibold">
                        Pending
                      </span>
                    ) : (
                      <span className="text-green-600 font-semibold">
                        Confirmed
                      </span>
                    )}
                  </td>
                  <td>
                    {booking.status === "pending" && (
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
