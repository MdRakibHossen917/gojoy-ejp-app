import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const PackageDetails = () => {
  const { id } = useParams();
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/packages/${id}`)
      .then((res) => setPackageData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!packageData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg mt-20">
      <img
        src={packageData.image}
        alt={packageData.tour_name}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-3xl font-bold mt-4">{packageData.tour_name}</h2>
      <p>
        <strong>Destination:</strong> {packageData.destination}
      </p>
      <p>
        <strong>Price:</strong> {packageData.price} BDT
      </p>
      <p>
        <strong>Duration:</strong> {packageData.duration}
      </p>
      <p>
        <strong>Departure Date:</strong> {packageData.departure_date}
      </p>
      <p>
        <strong>Details:</strong> {packageData.package_details}
      </p>
      <p>
        <strong>Contact:</strong> {packageData.contact_no}
      </p>
      <p>
        <strong>Guide:</strong> {packageData.guide_name}
      </p>
      <p>
        <strong>Email:</strong> {packageData.guide_email}
      </p>
    </div>
  );
};

export default PackageDetails;
