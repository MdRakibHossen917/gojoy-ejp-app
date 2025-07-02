import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar, FaArrowRight } from "react-icons/fa";
import Container from "./Container";

const ExploreDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Maldives",
      description:
        "Explore the Maldives with ITS Holidays Ltd.'s tour packages from Bangladesh. Enjoy pristine beaches, luxurious resorts, and unforgettable experiences.",
      image:
        "https://i.ibb.co/4RDSchsJ/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand.jpg",
      rating: 4.8,
      duration: "5D/4N",
      price: "$1200",
      featured: true,
    },
    {
      id: 2,
      name: "Sri Lanka",
      description:
        "What are the key destinations covered in IRCTC's Sri Lanka packages? Our packages include visits to Colombo, Kandy, Nuwara Eliya, and enchanting Ramayana sites.",
      image: "https://i.ibb.co/8D8nNcmx/indian-city-buildings-scene.jpg",
      rating: 4.5,
      duration: "6D/5N",
      price: "$950",
      featured: false,
    },
    {
      id: 3,
      name: "Nepal",
      description:
        "Experience the beauty of Nepal tour package from Bangladesh covering Pokhara, Kathmandu, and Nagarkot. Explore Himalayan landscapes with our tour package.",
      image: "https://i.ibb.co/wZnvV0FS/pexels-arina-krasnikova-7350882.jpg",
      rating: 4.3,
      duration: "4D/3N",
      price: "$750",
      featured: true,
    },
    {
      id: 4,
      name: "Pakistan",
      description:
        "Discover Pakistan with ITS Holidays Ltd.! Explore historic cities, majestic valleys, and vibrant cultures with our exclusive tour packages from Bangladesh.",
      image:
        "https://i.ibb.co/3yDjSy8y/young-girl-steps-house-tree-sunrise-nusa-penida-island-bali-indonesia.jpg",
      rating: 4.2,
      duration: "7D/6N",
      price: "$850",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#00809D] font-bold mb-4"
        >
          Your Dream <span className="text-[#FF7E33]">Foreign Trip</span> Starts
          Here!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        >
          Discover hidden gems and popular tourist spots with our exclusive
          packages tailored just for you. Adventure, relaxation, and culture —
          all in one.
        </motion.p>
      </div>

      <Container>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg  border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={`${destination.name} travel destination`}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                {destination.featured && (
                  <div className="absolute top-4 left-4 bg-[#FF7E33] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Discount 35%
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-900 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  {destination.price}
                </div>
              </div>

              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#00809D]" />
                    {destination.name}
                  </h3>
                  <div className="flex items-center bg-[#00809D] text-white text-xs px-2 py-1 rounded">
                    <FaStar className="mr-1" />
                    {destination.rating}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {destination.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ExploreDestinations;
