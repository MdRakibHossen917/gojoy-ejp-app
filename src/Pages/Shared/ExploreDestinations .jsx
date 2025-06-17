import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const ExploreDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Maldives",
      description:
        "Explore the Maldives with ITS Holidays Ltd.'s tour packages from Bangladesh. Enjoy pristine beaches, luxurious resorts, and unforgettable experiences.",
      image:
        "https://i.ibb.co/4RDSchsJ/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand.jpg",
    },
    {
      id: 2,
      name: "SriLanka",
      description:
        "What are the key destinations covered in IRCTC's Sri Lanka packages? Our packages include visits to Colombo, Kandy, Nuwara Eliya, and enchanting Ramayana.",
      image: "https://i.ibb.co/r2Fjq2tN/indian-city-buildings-scene.jpg",
    },
    {
      id: 3,
      name: "Nepal",
      description:
        "Experience the beauty of Nepal tour package from Bangladesh covering Pokhara, Kathmandu, and Nagarkot. Explore Himalayan landscapes with our tour package.",
      image:
        "https://i.ibb.co/3yDjSy8y/young-girl-steps-house-tree-sunrise-nusa-penida-island-bali-indonesia.jpg",
    },
    {
      id: 4,
      name: "Pakistan",
      description:
        "Discover Pakistan with ITS Holidays Ltd.! Explore historic cities, majestic valleys, and vibrant cultures with our exclusive tour packages from Bangladesh.",
      image: "https://i.ibb.co/wZnvV0FS/pexels-arina-krasnikova-7350882.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4"
        >
          Your Dream Foreign Trip Starts Here!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Discover hidden gems and popular tourist spots with our exclusive
          packages tailored just for you. Adventure, relaxation, and culture all
          in one place.
        </motion.p>
      </div>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {destinations.map(({ id, name, description, image }) => (
          <motion.div
            key={id}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExploreDestinations;
