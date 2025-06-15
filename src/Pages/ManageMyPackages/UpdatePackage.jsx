import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; // react-router-dom থেকে import করতে হবে
import axios from "axios";
import Swal from "sweetalert2";

const UpdatePackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/packages/${id}`)
      .then((res) => setPackageData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageData({ ...packageData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`${import.meta.env.VITE_API_URL}/packages/${id}`, packageData)
      .then(() => {
        Swal.fire("Success!", "Package updated successfully", "success");
        navigate("/manage-my-packages");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error!", "Something went wrong", "error");
      });
  };

  return (
    <div className="max-w-xl mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Package</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="tourName"
          value={packageData.tourName || ""}
          onChange={handleChange}
          placeholder="Tour Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="destination"
          value={packageData.destination || ""}
          onChange={handleChange}
          placeholder="Destination"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="price"
          value={packageData.price || ""}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          name="departureDate"
          value={
            packageData.departureDate
              ? packageData.departureDate.split("T")[0]
              : ""
          }
          onChange={handleChange}
          placeholder="Departure Date"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="packageDetails"
          value={packageData.packageDetails || ""}
          onChange={handleChange}
          placeholder="Package Details"
          className="textarea textarea-bordered w-full"
        ></textarea>

        <button type="submit" className="btn btn-primary w-full">
          Update Package
        </button>
      </form>
    </div>
  );
};

export default UpdatePackage;
