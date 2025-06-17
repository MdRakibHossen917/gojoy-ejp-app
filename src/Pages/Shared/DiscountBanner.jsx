import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { GiCommercialAirplane } from "react-icons/gi";


const DiscountBanner = () => {
  const handleBookClick = () => {
    Swal.fire({
      title: "Coming Soon!",
      text: "This feature will be available shortly.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-8 md:py-12 shadow-inner"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Text Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 flex items-center justify-center md:justify-start gap-3">
            <GiCommercialAirplane className="text-red-600 size-15" />
            25% Air Ticket Discount!
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Grab your offer on all foreign trips today. Limited time only!
          </p>
        </div>

        {/* Call to Action */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBookClick}
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg transition duration-300"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DiscountBanner;
