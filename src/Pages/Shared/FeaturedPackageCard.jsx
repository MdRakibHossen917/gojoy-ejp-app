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
    package_details,
  } = feature;
//   console.log(feature);

  return (
    <div className="card bg-base-200 gap-4 w-11/12 mt-5 mx-auto shadow-md rounded-xl">
      <figure>
        <img
          className="w-80 h-80 object-cover p-4 rounded-4xl"
          src={image}
          alt={tour_name}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title flex items-center gap-2">
          <img
            src="https://image.shutterstock.com/image-vector/location-map-icon-gps-pointer-150nw-761453428.jpg"
            alt="Location"
            className="w-6 h-6"
          />
          {tour_name}
          <div className="badge badge-secondary text-xs ml-2">{duration}</div>
        </h2>

        <p>{package_details}</p>

        <div className="card-actions justify-start">
          Destination:
          <div className="badge badge-outline font-bold">
            {departure_location}
          </div>
          <span>To</span>
          <div className="badge badge-outline font-bold">{destination}</div>
        </div>

        <p>Departure Date: {departure_date}</p>
        <p>
          Per Person: <span className="font-bold">{price} BDT</span>
        </p>
      </div>

      <div className="mx-auto mb-4">
        <Link
          to={`/packages/${_id}`}
          className="btn btn-primary md:btn-wide text-white"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPackageCard;
