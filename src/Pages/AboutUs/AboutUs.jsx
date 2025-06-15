import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 my-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-indigo-600">About Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At GoJoy Tours, we believe travel is not just a journey but a way to
          discover the world and yourself. Since 2015, we have been dedicated to
          crafting memorable travel experiences, bringing you closer to
          breathtaking destinations with trusted guides and personalized tours.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 mb-12">
        <div className="bg-indigo-50 p-8 rounded shadow text-center">
          <h2 className="text-3xl font-semibold mb-3 text-indigo-700">
            Our Mission
          </h2>
          <p className="text-gray-700">
            To create unforgettable travel experiences by connecting travelers
            with the best guides and unique local adventures.
          </p>
        </div>
        <div className="bg-indigo-50 p-8 rounded shadow text-center">
          <h2 className="text-3xl font-semibold mb-3 text-indigo-700">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To be the most trusted tour operator known for quality, safety, and
            personalized journeys that inspire wanderlust.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center p-6 rounded shadow bg-white">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Sarah Johnson"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
            <p className="text-indigo-600 font-medium">Founder & CEO</p>
            <p className="mt-2 text-gray-600 text-sm">
              Passionate about travel and committed to delivering the best
              customer experience.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center p-6 rounded shadow bg-white">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="David Lee"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">David Lee</h3>
            <p className="text-indigo-600 font-medium">Head of Operations</p>
            <p className="mt-2 text-gray-600 text-sm">
              Ensures smooth tours and manages guide partnerships worldwide.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center p-6 rounded shadow bg-white">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Emily Davis"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">Emily Davis</h3>
            <p className="text-indigo-600 font-medium">Customer Relations</p>
            <p className="mt-2 text-gray-600 text-sm">
              Always ready to help and make your journey special.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
