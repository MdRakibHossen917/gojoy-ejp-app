import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddPackage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddPackage = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newAddPackage = Object.fromEntries(formData.entries());

    const packageData = {
      tour_name: newAddPackage.tourName,
      image: newAddPackage.image,
      duration: newAddPackage.duration,
      departure_location: newAddPackage.departureLocation,
      destination: newAddPackage.destination,
      price: parseFloat(newAddPackage.price),
      departure_date: newAddPackage.departureDate,
      contact_no: newAddPackage.contactNo,
      package_details: newAddPackage.packageDetails,
      total_set: parseInt(newAddPackage.totalSet),
      guideName: user?.displayName,
      guidePhoto: user?.photoURL,
      guideEmail: user?.email,
      likedBy: [],
      booking_count: 0,
    };

    try {
      //  Firebase ID token collect
      const token = await user.getIdToken();

      // Send request with Authorization header
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-tour-packages`,
        packageData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Package Added Successfully",
        showConfirmButton: false,
        timer: 1000,
      });

      navigate("/");
    } catch (err) {
      console.error("Error adding package:", err.response?.data || err.message);
      Swal.fire(
        "Error",
        err?.response?.data?.error || "Failed to add package",
        "error"
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg my-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Add New Tour Package
      </h2>
      <form
        onSubmit={handleAddPackage}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="label font-semibold">Tour Name</label>
          <input
            type="text"
            name="tourName"
            placeholder="Tour Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="e.g., 3 Days 2 Nights"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Departure Location</label>
          <input
            type="text"
            name="departureLocation"
            placeholder="Departure Location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Departure Date</label>
          <input
            type="date"
            name="departureDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Contact No</label>
          <input
            type="text"
            name="contactNo"
            placeholder="Contact Number"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Total Set</label>
          <input
            type="number"
            name="totalSet"
            placeholder="Total Set"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="label font-semibold">Package Details</label>
          <textarea
            name="packageDetails"
            placeholder="Package Details"
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
        </div>

        <div className="md:col-span-2 flex justify-center mt-4">
          <button type="submit" className="btn btn-primary w-1/2">
            Add Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPackage;
