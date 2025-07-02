import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { GiCommercialAirplane } from "react-icons/gi";
import Button from "./Button";

const DiscountBanner = () => {
  const handleBookClick = () => {
    Swal.fire({
      title: "Coming Soon!",
      text: "This feature will be available shortly.",
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#00809D",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const planeVariants = {
    hover: {
      x: [0, 5, -5, 5, 0],
      transition: { duration: 1, repeat: Infinity },
    },
  };

  return (
    <div className="w-10/12 mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-8 md:py-12 shadow-inner rounded-xl"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Text Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <motion.h2
              variants={itemVariants}
              className="flex items-center gap-5 text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
            >
              <motion.span
                variants={planeVariants}
                whileHover="hover"
                animate={{ rotate: [0, 5, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <GiCommercialAirplane className="text-[#F2994A] text-5xl" />
              </motion.span>
              <motion.span
                initial={{ scale: 1, color: "#F2994A" }}
                animate={{
                  scale: [1, 1.4, 1],
                  color: ["#F2994A", "#FFB547", "#F2994A"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="font-extrabold"
              >
                25%
              </motion.span>
              Air Ticket Discount!
            </motion.h2>
            <p className="text-sm   mt-2">
              Limited time offer! Book your dream destination today and save
              big.
            </p>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-4 md:mt-0">
            <Button
              onClick={handleBookClick}
              className="rounded-full px-8 py-3 text-lg hover:shadow-xl transition-all"
              variant="primary"
            >
              Book Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DiscountBanner;
