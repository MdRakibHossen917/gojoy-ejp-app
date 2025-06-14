import React from "react";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/allPackages");
  };

  return (
    <div className="hero min-h-[100vh] bg-gradient-to-r from-[#e0f7fa] to-[#fffde7]">
      <div className="hero-content flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2   ">
          <img
            className="rounded-tl-full   object-cover"
            src="https://i.ibb.co/wZnvV0FS/pexels-arina-krasnikova-7350882.jpg"
            alt="Travel"
          />
        </div>

        {/* Right Side Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Unforgettable Journeys
          </h1>
          <p className="text-gray-600 max-w-xl mb-6 mx-auto md:mx-0">
            GoJoy brings you curated travel experiences from around the world.
            Find your perfect adventure with just one click.
          </p>
          <button
            onClick={handleExploreClick}
            className="btn btn-primary text-white px-6 py-3 rounded-lg"
          >
            Explore All Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
