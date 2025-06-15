import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useParams } from "react-router";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const PackageDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [packageData, setPackageData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [specialNote, setSpecialNote] = useState("");
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/packages/${id}`)
      .then((res) => {
        setPackageData(res.data);
        // Check if current user liked this package
        if (user && res.data.likedBy?.includes(user.email)) {
          setLiked(true);
        } else {
          setLiked(false);
        }
      })
      .catch((err) => console.error(err));
  }, [id, user]);

  if (!packageData) return <div>Loading...</div>;

  // Single toggle like/unlike handler
  const handleToggleLike = async () => {
    if (!user) {
      Swal.fire("Error", "You must be logged in to like/unlike", "error");
      return;
    }

    // Prevent guide from liking own package
    if (user.email === packageData.guideEmail) {
      Swal.fire("Warning", "You cannot like your own package.", "warning");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/packages/${id}/toggle-like`,
        { userEmail: user.email }
      );

      setLiked(res.data.currentLiked);

      setPackageData((prev) => {
        const updatedLikedBy = res.data.currentLiked
          ? [...(prev.likedBy || []), user.email]
          : (prev.likedBy || []).filter((email) => email !== user.email);

        return { ...prev, likedBy: updatedLikedBy };
      });

      Swal.fire(
        res.data.currentLiked ? "Liked!" : "Unliked!",
        res.data.currentLiked
          ? "Thanks for showing interest."
          : "You've removed your interest.",
        "success"
      );
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to toggle like", "error");
    }
  };
  

  // Booking submit handler (unchanged)
  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire("Error", "You must be logged in to book", "error");
      return;
    }

    const bookingData = {
      packageId: id,
      tourName: packageData.tourName,
      price: packageData.price,
      buyerName: user.displayName || "No Name",
      buyerEmail: user.email,
      bookingDate: new Date().toISOString(),
      specialNote,
      status: "pending",
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, bookingData);

      setPackageData((prev) => ({
        ...prev,
        bookingCount: (prev.bookingCount || 0) + 1,
      }));

      Swal.fire("Success", "Booking submitted successfully!", "success");
      setShowModal(false);
      setSpecialNote("");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Already You Booking This Package", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5 my-10">
      <img
        src={packageData.image}
        alt={packageData.tourName}
        className="w-full rounded"
      />
      <div className="max-w-4xl mx-auto p-5 my-10 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">{packageData.tour_name}</h1>

        {/* Package Details */}
        <div className="space-y-2 text-gray-800">
          <p>
            <strong>Duration:</strong> {packageData.duration}
          </p>
          <p>
            <strong>Price:</strong> {packageData.price} BDT
          </p>
          <p>
            <strong>Departure:</strong>{" "}
            {new Date(packageData.departure_date).toLocaleDateString()}
          </p>

          <p>
            <strong>Destination:</strong> {packageData.destination}
          </p>
          <p>
            <strong>Available Seat:</strong> {packageData.total_set}
          </p>
          <p className="  text-gray-700">
            <strong>Description:</strong> {packageData.packageDetails}
          </p>
        </div>

        {/* Guide Info Card */}
        <div className="mb-6 p-6 border rounded-lg shadow-sm bg-gray-50 max-w-md">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-700">
            Guide Info
          </h3>
          <div className="flex items-center gap-5">
            <img
              src={packageData.guidePhoto}
              alt={packageData.guideName}
              className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500"
            />
            <div>
              <p className="text-lg font-medium text-gray-900">
                {packageData.guideName}
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Contact:</span>{" "}
                {packageData.contact_no}
              </p>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Book Now
        </button>

        {/* Likes and Booking Count Section */}
        <div className="my-6 p-4 bg-indigo-50 rounded-lg shadow-md max-w-sm mx-auto text-center">
          <p className="text-lg font-semibold text-indigo-700 mb-3">
            Interested Users:{" "}
            <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              {packageData.likedBy?.length || 0}
            </span>
          </p>

          <button
            onClick={handleToggleLike}
            aria-label={liked ? "Remove Interest" : "Show Interest"}
            title={
              liked
                ? "Click to remove your interest"
                : "Click to show your interest"
            }
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition 
      ${
        liked
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-green-500 text-white hover:bg-green-600"
      }
      shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {liked ? <FaThumbsDown size={20} /> : <FaThumbsUp size={20} />}
            {liked ? "Ignore" : "Interested"}
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            tabIndex={-1}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative mx-4 sm:mx-0"
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: "90vh", overflowY: "auto" }}
            >
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close booking form"
                className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-gray-900 transition"
              >
                &times;
              </button>

              <h2
                id="booking-modal-title"
                className="text-3xl font-extrabold mb-8 text-gray-900 text-center"
              >
                Book{" "}
                <span className="text-green-600">{packageData.tourName}</span>
              </h2>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* Tour Name */}
                <div>
                  <label
                    htmlFor="tourName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Tour Name
                  </label>
                  <input
                    id="tourName"
                    type="text"
                    value={packageData.tourName}
                    disabled
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                {/* Price */}
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Price (BDT)
                  </label>
                  <input
                    id="price"
                    type="text"
                    value={packageData.price}
                    disabled
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                {/* Guide Name */}
                <div>
                  <label
                    htmlFor="buyerName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Guide Name
                  </label>
                  <input
                    id="buyerName"
                    type="text"
                    value={user?.displayName || ""}
                    disabled
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                {/* Guide Email */}
                <div>
                  <label
                    htmlFor="buyerEmail"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Guide Email
                  </label>
                  <input
                    id="buyerEmail"
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                {/* Booking Date */}
                <div>
                  <label
                    htmlFor="bookingDate"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Booking Date
                  </label>
                  <input
                    id="bookingDate"
                    type="text"
                    value={new Date().toLocaleDateString()}
                    disabled
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                {/* Special Note */}
                <div>
                  <label
                    htmlFor="specialNote"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Special Note
                  </label>
                  <textarea
                    id="specialNote"
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    placeholder="Optional note"
                    className="textarea textarea-bordered w-full rounded-lg border-gray-300 shadow-sm resize-y"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-success w-full py-3 text-lg font-bold rounded-lg hover:bg-green-700 transition-shadow shadow-md"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageDetails;
