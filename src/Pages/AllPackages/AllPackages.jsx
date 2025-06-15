import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const AllPackages = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [packages, setPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all packages from API
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/packages`)
      .then((res) => setPackages(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filter packages based on search term (case-insensitive)
  const filteredPackages = packages.filter((pkg) =>
    pkg.tourName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle "View Details" click
  const handleViewDetails = (id) => {
    if (!user) {
      // If not logged in, redirect to login page
      navigate("/auth/logIn");
    } else {
      // Else go to package details page
      navigate(`/packages/${id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5 text-center">
      <h1 className="text-4xl font-bold mb-6">All Tour Packages</h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search packages by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.length === 0 ? (
          <p>No packages found matching your search.</p>
        ) : (
          filteredPackages.map((pkg) => (
            <div
              key={pkg._id}
              className="  rounded-lg shadow hover:shadow-lg transition duration-300 bg-white"
            >
              <img
                src={pkg.image}
                alt={pkg.tourName}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <div className="p-5 space-y-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {pkg.tourName}
                </h2>

                <div className="space-y-2 text-gray-700 text-sm">
                  <p>
                    <span className="font-semibold">Duration:</span>{" "}
                    {pkg.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Price:</span> {pkg.price}{" "}
                    BDT
                  </p>
                  <p>
                    <span className="font-semibold">Departure:</span>{" "}
                    {new Date(pkg.departureDate).toLocaleDateString()}
                  </p>
                </div>

                {/* Guide Info */}
                <div className="flex items-center gap-4 bg-blue-50 p-3 rounded-lg shadow">
                  <img
                    src={pkg.guidePhoto}
                    alt={pkg.guideName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {pkg.guideName}
                    </p>
                    <p className="text-xs text-gray-500">Tour Guide</p>
                  </div>
                </div>

                <button
                  onClick={() => handleViewDetails(pkg._id)}
                  className="btn btn-primary w-full mt-3 text-base font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllPackages;
