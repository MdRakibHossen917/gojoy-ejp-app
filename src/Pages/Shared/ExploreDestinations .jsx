import React from "react";
import { motion } from "framer-motion";

const ExploreDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Sundarbans",
      description: "Explore the largest mangrove forest and its wildlife.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Cox's Bazar",
      description: "Relax at the world's longest natural sea beach.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Srimangal",
      description: "Discover the lush tea gardens and peaceful nature.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Rangamati",
      description: "Experience the beauty of hills and tribal culture.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
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
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4"
        >
          Explore More Destinations
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
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
