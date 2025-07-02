import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import Container from "../Shared/Container";
import Button from "../Shared/Button";
import { FaMapMarkerAlt } from "react-icons/fa";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
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

  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/auth/logIn", { state: { from: `/packages/${id}` } });
    } else {
      navigate(`/packages/${id}`);
    }
  };

  const sortedPackages = [...packages]
    .filter((pkg) => {
      const tourName = pkg?.tour_name || "";
      return tourName.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "latest")
        return new Date(b.departure_date) - new Date(a.departure_date);
      return 0;
    });

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh] text-lg">
        Loading Tour Packages...
      </div>
    );

  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#00809D] mb-2">
            Explore Our Tour Collections
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Discover handpicked tour packages for every traveler – from relaxing
            getaways to thrilling adventures, across breathtaking global
            destinations.
          </p>
        </div>

        {/* Search and Sort */}
        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4 items-center">
          <input
            type="text"
            placeholder="Search by tour name..."
            value={search}
            onChange={handleSearchChange}
            className="input input-bordered w-full max-w-md"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered w-full md:w-64"
          >
            <option value="">Sort By</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="latest">Departure Date: Newest</option>
          </select>
        </div>

        {/* Packages */}
        {sortedPackages.length === 0 ? (
          <p className="text-center text-red-500">No packages found!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedPackages.map((pkg, index) => (
              <motion.div
                key={pkg._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition p-3 flex flex-col"
              >
                <figure className="relative mb-3">
                  <img
                    src={pkg.image}
                    alt={pkg.tour_name}
                    className="w-full h-52 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#00809D] text-white px-2 py-1 rounded-full text-xs shadow-md">
                    {pkg.duration}
                  </div>
                </figure>

                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1 mb-1">
                  <FaMapMarkerAlt className="text-[#00809D]" />
                  {pkg.tour_name}
                </h3>

                <p className="text-sm text-gray-600 mb-1">
                  <strong>Departure:</strong> {pkg.departure_date}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Price:</strong> {pkg.price} BDT
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Overview:</strong>{" "}
                  {pkg.package_details?.split(" ").slice(0, 12).join(" ")}...
                </p>

                <Button
                  onClick={() => handleViewDetails(pkg._id)}
                  className=" btn-sm mt-auto w-full"
                >
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default AllPackages;
