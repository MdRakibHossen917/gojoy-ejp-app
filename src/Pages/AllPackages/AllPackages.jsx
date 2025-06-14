import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/packages")
      .then((res) => setPackages(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Tour Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg._id} className="card bg-base-200 shadow-md p-4">
            <img
              src={pkg.image}
              alt={pkg.tour_name}
              className="rounded-lg h-48 w-full object-cover"
            />
            <h3 className="text-xl font-bold mt-4">{pkg.tour_name}</h3>
            <p>Destination: {pkg.destination}</p>
            <p>Price: {pkg.price} BDT</p>
            <Link to={`/packages/${pkg._id}`}>
              <button className="btn btn-primary btn-sm mt-3">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
