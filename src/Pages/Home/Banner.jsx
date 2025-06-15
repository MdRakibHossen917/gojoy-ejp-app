import React from "react";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/allPackages");
  };

  return (
    <div className="hero bg-gradient-to-r from-[#e0f7fa] to-[#fffde7]  ">
      <div className="hero-content flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="rounded-full w-80 h-80 object-cover   transition duration-500 hover:scale-105"
            src="https://i.ibb.co/Hfm6rtp9/travel-concept-with-baggage.jpg"
            alt="Travel"
          />
        </div>

        {/* Right Side Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Embark on <span className="text-primary">Life-Changing</span>{" "}
            Adventures
          </h1>
          <p className="text-gray-600 max-w-xl mb-8 mx-auto md:mx-0 text-lg">
            Explore the world’s most breathtaking destinations with GoJoy — your
            gateway to unforgettable memories.
          </p>
          <button
            onClick={handleExploreClick}
            className="btn btn-primary text-white px-8 py-3 rounded-lg text-lg shadow-md hover:scale-105 transition"
          >
            Explore All Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
