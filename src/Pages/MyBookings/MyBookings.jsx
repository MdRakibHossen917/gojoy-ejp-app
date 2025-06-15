import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

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

  // status আপডেট করার ফাংশন
  const handleConfirm = async (bookingId) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/bookings/${bookingId}`,
        { status: "confirmed" }
      );
      if (res.data.success) {
        alert("Booking confirmed successfully!");
        fetchBookings(); 
      }
    } catch (error) {
      console.error("Error confirming booking", error);
      alert("Failed to confirm booking");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-5">
      <h2 className="text-3xl font-bold mb-6">My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Tour Name</th>
              <th>Price (BDT)</th>
              <th>Booking Date</th>
              <th>Special Note</th>
              <th>Status</th>
              <th>Action</th>  
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.tourName}</td>
                <td>{booking.price}</td>
                <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                <td>{booking.specialNote || "-"}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === "pending" ? (
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleConfirm(booking._id)}
                    >
                      Confirm
                    </button>
                  ) : (
                    <span className="text-green-600 font-semibold">
                      Confirmed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBookings;
