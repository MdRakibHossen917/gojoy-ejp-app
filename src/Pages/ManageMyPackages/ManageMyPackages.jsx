import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ManageMyPackages = () => {
  const { user } = useAuth();
  const [packages, setPackages] = useState([]);

  //Medal and Select Package State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/manage-my-packages/${user.email}`)
        .then((res) => setPackages(res.data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/packages/${id}`)
          .then(() => {
            setPackages((prev) => prev.filter((pkg) => pkg._id !== id));
            Swal.fire("Deleted!", "Package has been deleted.", "success");
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the package.", "error");
          });
      }
    });
  };

  // Clicking on the Edit button opens the modal.
  const handleEditClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedPackage({ ...selectedPackage, [name]: value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const id = selectedPackage._id;
    const { _id, ...updateData } = selectedPackage;  

    axios
      .patch(`${import.meta.env.VITE_API_URL}/packages/${id}`, updateData)
      .then(() => {
        Swal.fire("Success!", "Package updated successfully", "success");
        setPackages((prev) =>
          prev.map((pkg) => (pkg._id === id ? selectedPackage : pkg))
        );
        handleModalClose();
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to update package", "error");
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-5 my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Packages</h2>
      {packages.length === 0 ? (
        <p className="text-center text-gray-500">No packages found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Tour Name</th>
                <th>Destination</th>
                <th>Price</th>
                <th>Departure Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg._id}>
                  <td>{pkg.tourName}</td>
                  <td>{pkg.destination}</td>
                  <td>{pkg.price} BDT</td>
                  <td>{pkg.departureDate}</td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        className="btn btn-sm btn-info"
                        onClick={() => handleEditClick(pkg)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(pkg._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 btn btn-sm btn-error"
              onClick={handleModalClose}
            >
              X
            </button>
            <h3 className="text-2xl mb-4 font-bold">Update Package</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <input
                type="text"
                name="tourName"
                value={selectedPackage.tourName || ""}
                onChange={handleChange}
                placeholder="Tour Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="destination"
                value={selectedPackage.destination || ""}
                onChange={handleChange}
                placeholder="Destination"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="price"
                value={selectedPackage.price || ""}
                onChange={handleChange}
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
              <input
                type="date"
                name="departureDate"
                value={
                  selectedPackage.departureDate
                    ? selectedPackage.departureDate.split("T")[0]
                    : ""
                }
                onChange={handleChange}
                placeholder="Departure Date"
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="packageDetails"
                value={selectedPackage.packageDetails || ""}
                onChange={handleChange}
                placeholder="Package Details"
                className="textarea textarea-bordered w-full"
              ></textarea>

              <button type="submit" className="btn btn-primary w-full">
                Update Package
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMyPackages;
