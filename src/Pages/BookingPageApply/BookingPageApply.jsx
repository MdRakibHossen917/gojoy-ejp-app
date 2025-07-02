import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const BookingPageApply = () => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const tourPackage = {
      tour_name: form.tour_name.value,
      image: form.image.value,
      duration: form.duration.value,
      departure_location: form.departure_location.value,
      destination: form.destination.value,
      price: parseFloat(form.price.value),
      departure_date: form.departure_date.value,
      package_details: form.package_details.value,
      contact_no: form.contact_no.value,
      guide_name: user.displayName,
      guide_email: user.email,
      guide_photo: user.photoURL,
      bookingCount: 0,
      created_at: new Date(),
    };

    try {
      
      const token = await user.getIdToken();

        
      const res = await axios.post(
        "https://gojoy-app-server.vercel.app/add-tour-packages",
        tourPackage,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Package Added Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    } catch (err) {
      console.error("Error adding package:", err);
      Swal.fire({
        icon: "error",
        title: err.response?.data?.error || "Something went wrong!",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Add New Tour Package
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="label">Tour Name</label>
          <input
            type="text"
            name="tour_name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Image URL</label>
          <input
            type="url"
            name="image"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Duration (e.g., 3 Days 2 Nights)</label>
          <input
            type="text"
            name="duration"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Departure Location</label>
          <input
            type="text"
            name="departure_location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Destination</label>
          <input
            type="text"
            name="destination"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Price (in BDT)</label>
          <input
            type="number"
            name="price"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Departure Date</label>
          <input
            type="date"
            name="departure_date"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="label">Package Details</label>
          <textarea
            name="package_details"
            rows="4"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        <div>
          <label className="label">Contact No.</label>
          <input
            type="text"
            name="contact_no"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="label">
            Guide Info (Auto Fetched from Firebase)
          </label>
          <img
            src={user?.photoURL}
            alt="Guide"
            className="w-24 h-24 rounded-full mt-2 border-2"
          />
          <p>
            <strong>Name:</strong> {user?.displayName}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </div>

        <button type="submit" className="btn btn-primary md:col-span-2">
          Add Package
        </button>
      </form>
    </div>
  );
};

export default BookingPageApply;
