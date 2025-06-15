import React, { useEffect, useState } from "react";
import FeaturedPackageCard from "../Shared/FeaturedPackageCard";

const FeaturedPackage = ({ featuredPackagePromise }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    featuredPackagePromise.then((data) => {
      const firstSix = data.slice(0, 6);
      setFeatures(firstSix);
    });
  }, [featuredPackagePromise]);

  return (
    <div>
      <h2 className="text-4xl text-center my-2 font-bold">
        Feature of the Package  
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <FeaturedPackageCard key={feature._id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPackage;
