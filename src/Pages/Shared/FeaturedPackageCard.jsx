import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router"; 
import useAuth from "../../hooks/useAuth";


const FeaturedPackageCard = ({ feature }) => {
  const {
    _id,
    tour_name,
    image,
    duration,
    departure_location,
    destination,
    price,
    departure_date,
    total_set,
    package_details,
  } = feature;

  const navigate = useNavigate();
   const { user } = useAuth();

  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/auth/logIn", { state: { from: `/packages/${id}` } });
    } else {
      navigate(`/packages/${id}`);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
      <figure className="relative mb-4">
        <img
          src={image}
          alt={tour_name}
          className="w-full h-48 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#00809D] text-white text-xs px-3 py-1 rounded-full shadow-md">
          {duration}
        </div>
      </figure>

      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1 mb-2">
        <FaMapMarkerAlt className="text-[#00809D]" />
        {tour_name}
      </h3>

      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700 mb-2">
        <span className="font-medium">From:</span>
        <span className="badge badge-outline">{departure_location}</span>
        <span className="font-medium">To:</span>
        <span className="badge badge-outline">{destination}</span>
      </div>

      <p className="text-sm text-gray-600 mb-1">
        <strong>Departure:</strong> {departure_date}
      </p>

      <p className="text-sm text-gray-600 mb-1">
        <strong>Price:</strong> {price} BDT
      </p>

      <p className="text-sm text-gray-600 mb-1">
        <strong>Available Seat:</strong>{" "}
        {total_set === 0 ? (
          <span className="text-red-500 font-semibold">Full</span>
        ) : (
          total_set
        )}
      </p>

      <p className="text-sm text-gray-600 mb-1">
        <strong>Overview:</strong>{" "}
        {package_details?.split(" ").slice(0, 12).join(" ")}...
      </p>

      <button
        onClick={() => handleViewDetails(_id)}
        className="btn bg-[#00809D] text-white hover:bg-[#006B80] btn-sm mt-auto w-full rounded"
      >
        View Details
      </button>
    </div>
  );
};

export default FeaturedPackageCard;
