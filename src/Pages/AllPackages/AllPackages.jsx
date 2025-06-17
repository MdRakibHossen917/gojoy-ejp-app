import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        let config = {};

        if (user) {
          const idToken = await user.getIdToken();
          config.headers = {
            Authorization: `Bearer ${idToken}`,
          };
        }

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/packages`,
          config
        );
        setPackages(res.data);
      } catch (err) {
        console.error("Failed to fetch packages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [user]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredPackages = packages.filter((pkg) => {
    const tourName = pkg?.tour_name || "";
    return tourName.toLowerCase().includes(search.toLowerCase());
  });

  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/auth/logIn", { state: { from: `/packages/${id}` } });
    } else {
      navigate(`/packages/${id}`);
    }
  };

  if (loading)
    return <div className="text-center py-20 text-xl">Loading Packages...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Tour Packages</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by tour name..."
          value={search}
          onChange={handleSearchChange}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {filteredPackages.length === 0 ? (
        <p className="text-red-500 text-center">No packages found!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg._id}
              className="card bg-base-100 shadow-lg p-4 rounded-lg"
            >
              <img
                src={pkg.image}
                alt={pkg.tour_name}
                className="rounded-lg h-48 w-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{pkg.tour_name}</h3>

              <p className="mt-2">
                <strong>Duration:</strong> {pkg.duration}
              </p>
              <p>
                <strong>Departure:</strong> {pkg.departure_date}
              </p>
              <p>
                <strong>Price:</strong> {pkg.price} BDT
              </p>
              
              {/* Guide Info */}
              <div className="flex items-center gap-3 mb-4 bg-gray-100 p-3 rounded-lg shadow-sm">
                <div className="relative">
                  <img
                    src={pkg.guidePhoto}
                    alt={pkg.guideName}
                    className="w-12 h-12 rounded-full border-4 border-primary object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3  rounded-full   border-white"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {pkg.guideName}
                  </h4>
                  <p className="text-sm text-gray-500">Tour Guide</p>
                </div>
              </div>

              <button
                className="btn btn-primary mt-4 w-full"
                onClick={() => handleViewDetails(pkg._id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPackages;
