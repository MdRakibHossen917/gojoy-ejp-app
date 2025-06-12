import React from 'react';

const AboutFooterUs = () => {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

        <p className="mb-6 text-lg text-center">
          Welcome to <span className="font-semibold text-blue-600">GoJoy</span>{" "}
          — your trusted companion for discovering and booking the best tour
          packages in Bangladesh and beyond. Our goal is to make travel planning
          simple, affordable, and joyful!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Who We Are */}
          <div>
            <h2 className="text-xl font-bold mb-2">Who We Are</h2>
            <p className="mb-4">
              GoJoy is a local travel tech platform created to connect travelers
              with amazing destinations and experiences. With a deep
              understanding of Bangladeshi travelers’ needs, we design and offer
              curated tour packages, combining ease of booking with memorable
              experiences.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-xl font-bold mb-2">Our Mission</h2>
            <p className="mb-4">
              Our mission is to make travel easier, safer, and more exciting.
              Whether you're planning a weekend getaway, a family trip, or a
              group tour, GoJoy is here to guide you every step of the way with
              secure bookings, verified packages, and customer-first service.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4 text-center">
            Why Choose GoJoy?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li> Easy and fast online booking</li>
            <li> Handpicked and verified tour packages</li>
            <li> Affordable prices with no hidden fees</li>
            <li> Friendly support team available 24/7</li>
            <li>
               Perfect for solo travelers, families, or corporate groups
            </li>
          </ul>
        </div>
      </div>
    );
};

export default AboutFooterUs;