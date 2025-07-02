import React, { useEffect, useState } from "react";
import FeaturedPackageCard from "../Shared/FeaturedPackageCard";
import Container from "../Shared/Container";
import { useNavigate } from "react-router";
import Button from "../Shared/Button";

const FeaturedPackage = ({ featuredPackagePromise }) => {
  const [features, setFeatures] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    featuredPackagePromise.then((data) => {
      const firstSix = data.slice(0, 8);
      setFeatures(firstSix);
    });
  }, [featuredPackagePromise]);

  return (
    <Container>
      <div className="text-center my-4 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#00809D] font-bold mb-4">
          Best Travel Deals <span className="  text-[#FF7E33]">Just For You</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Discover GoJoy's top-rated and most trusted travel packages. Start
          your next adventure with unforgettable memories!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4  gap-4   ">
        {features.map((feature) => (
          <FeaturedPackageCard key={feature._id} feature={feature} />
        ))}
      </div>
      {/*Button */}
      <div className="text-center py-6">
        <Button onClick={() => navigate("/allPackages")}>Show All</Button>
      </div>
    </Container>
  );
};

export default FeaturedPackage;
