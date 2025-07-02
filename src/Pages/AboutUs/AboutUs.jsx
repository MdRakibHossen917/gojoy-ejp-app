import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaServer, FaUserTie } from "react-icons/fa";
import { Link } from "react-router";
import Button from "../Shared/Button";

const AboutUs = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 bg-white rounded-xl my-8 sm:my-10 lg:my-12">
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00809D] mb-3 sm:mb-4"
        >
          About <span className="text-[#FF7E33]">Gojoy</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-800 mt-3 sm:mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Your ultimate travel companion for seamless vacation planning and
          unforgettable experiences.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 sm:space-y-6"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Our Story
          </h3>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            Gojoy was born from a passion for travel and technology. We
            understand the challenges of planning the perfect trip, and we've
            built a platform that makes travel planning effortless, enjoyable,
            and personalized.
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            Our mission is to connect travelers with authentic experiences while
            providing all the tools needed for stress-free vacation planning.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 sm:mt-8">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
              <FaMobile className="text-2xl sm:text-3xl text-[#00809D] mb-2" />
              <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                Mobile First
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Optimized for your smartphone
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
              <FaServer className="text-2xl sm:text-3xl text-[#FF7E33] mb-2" />
              <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                Reliable
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                99.9% uptime guarantee
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative group">
            <img
              src="https://i.ibb.co/bjqPDLMq/481078563-966191125652077-6103330172912893514-n.jpg"
              alt="Md Rakib Hossen, Developer of Gojoy"
              className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 object-cover rounded-full border-4 border-white shadow-md"
            />
            <div className="absolute inset-0 bg-[#00809D] bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">
                Web Developer
              </span>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 text-center max-w-xs sm:max-w-sm md:max-w-md px-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Md Rakib Hossen
            </h3>
            <p className="text-[#00809D] font-semibold text-sm sm:text-base mt-1">
              Founder & Web Developer
            </p>
            <p className="text-gray-700 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed">
              Passionate about creating digital solutions that make travel
              planning effortless and enjoyable.
            </p>
          </div>

          <div className="mt-5 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100 w-full max-w-xs sm:max-w-sm">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <FaCode className="text-xl sm:text-2xl text-[#FF7E33]" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  Technologies
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  React, Node.js, MongoDB
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-10 sm:mt-12 md:mt-16"
      >
        <Button>
          <Link
            to="/FooterLayout/contactUs"
            className=" mx-6 sm:mx-8 md:mx-12 lg:mx-14 "
          >
            Contact Developer
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default AboutUs;
