import React from "react";
import { Link } from "react-router";

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
    packageDetails,
    guideName,
    guidePhoto,
    total_set,
  } = feature;
  console.log(feature);

  return (
    <div className="card w-11/12 mx-auto bg-white my-5 shadow-md rounded-xl border border-gray-200 hover:shadow-xl transition duration-300">
      {/* Tour Image */}
      <figure className="relative">
        <img
          className="w-full p-4 rounded-4xl h-64 object-cover   transition duration-500 hover:scale-105"
          src={image}
          alt={tour_name}
        />
        <div className="absolute top-4 left-4 bg-secondary text-white py-1 px-3 rounded-full text-sm">
          {duration}
        </div>
      </figure>

      <div className="card-body p-4">
        {/* Tour Name */}
        <h2 className="text-xl font-bold mb-3">{tour_name}</h2>

        {/* Departure & Destination */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-semibold text-gray-700">From:</span>
          <span className="badge badge-outline">{departure_location}</span>
          <span className="font-semibold text-gray-700">To:</span>
          <span className="badge badge-outline">{destination}</span>
        </div>

        {/* total set */}
        <p className="text-sm text-gray-700 mb-1">
          Available Seat: {total_set === 0 ? "Full" : total_set}
        </p>

        {/* Departure Date */}
        <p className="text-sm text-gray-700 mb-1">
          Departure: {departure_date}
        </p>

        {/* Price */}
        <p className="text-lg font-semibold text-primary mb-3">
          ৳ {price} BDT per person
        </p>
        {/* Guide Info */}
        <div className="flex items-center gap-3 mb-4 bg-gray-100 p-3 rounded-lg shadow-sm">
          <div className="relative">
            <img
              src={guidePhoto}
              alt={guideName}
              className="w-12 h-12 rounded-full border-4 border-primary object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3  rounded-full   border-white"></span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{guideName}</h4>
            <p className="text-sm text-gray-500">Tour Guide</p>
          </div>
        </div>

        {/* View Details Button */}
        <div className="flex justify-center">
          <Link
            to={`/packages/${_id}`}
            className="btn btn-primary btn-wide  transition duration-500 hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPackageCard;
