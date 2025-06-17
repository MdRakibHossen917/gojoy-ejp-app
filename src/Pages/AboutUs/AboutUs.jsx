import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 my-12">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-extrabold mb-6 text-indigo-600 dark:text-indigo-400 drop-shadow-lg">
          About Us
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
          At GoJoy Tours, we believe travel is not just a journey but a way to
          discover the world and yourself. Since 2015, we have been dedicated to
          crafting memorable travel experiences, bringing you closer to
          breathtaking destinations with trusted guides and personalized tours.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="grid md:grid-cols-2 gap-10 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div
          className="bg-indigo-50 dark:bg-indigo-900 p-10 rounded-2xl shadow-lg text-center hover:shadow-indigo-400 transition-shadow cursor-default"
          custom={0}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            To create unforgettable travel experiences by connecting travelers
            with the best guides and unique local adventures.
          </p>
        </motion.div>

        <motion.div
          className="bg-indigo-50 dark:bg-indigo-900 p-10 rounded-2xl shadow-lg text-center hover:shadow-indigo-400 transition-shadow cursor-default"
          custom={1}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
            Our Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            To be the most trusted tour operator known for quality, safety, and
            personalized journeys that inspire wanderlust.
          </p>
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <section>
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center text-indigo-600 dark:text-indigo-400 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Meet Our Team
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Team Member Card Template */}
          {[
            {
              name: "Tim Berners-Lee",
              role: "Inventor of the World Wide Web",
              photo: "https://i.ibb.co/Df4562FV/Tim-Berners-Lee.jpg",
              Contribution:
                "Created the first website and web browser in 1989-1990, laying the foundation for the modern internet.",
            },
            {
              name: "Brendan Eich",
              role: "Creator of JavaScript",
              photo: "https://i.ibb.co/RG5r3YL4/Brendan-Eich.jpg",
              Contribution:
                "Developed JavaScript in just 10 days in 1995 at Netscape, a language that revolutionized web interactivity.",
            },
            {
              name: "Chris Coyier",
              role: "Frontend Developer, Educator",
              photo: "https://i.ibb.co/rR4VYw6L/Chris-Coyier.jpg",
              Contribution:
                "Creator of CSS-Tricks, a hugely popular web development blog and resource. Co-founder of CodePen.",
            },
          ].map(({ name, role, photo, bio }, index) => (
            <motion.div
              key={name}
              className="text-center p-8 rounded-3xl shadow-lg bg-white dark:bg-gray-800 cursor-pointer hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.3,
                duration: 0.6,
                ease: "easeOut",
              }}
              aria-label={`Team member: ${name}, Role: ${role}`}
            >
              <img
                src={photo}
                alt={name}
                className="w-32 h-32 rounded-full mx-auto mb-5 object-cover border-4 border-indigo-500 dark:border-indigo-400 shadow-md"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                {name}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                {role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
