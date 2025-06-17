import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router";
import { FiPhoneCall } from "react-icons/fi"; 
import FeaturedPackage from "./FeaturedPackage";
import Banner from "./Banner";
import ExploreDestinations from "../Shared/ExploreDestinations ";
import DiscountBanner from "../Shared/DiscountBanner";
 

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredPackagePromise = fetch("http://localhost:5000/packages").then(
    (res) => res.json()
  );

  return (
    <div>
      <Banner />

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <FeaturedPackage featuredPackagePromise={featuredPackagePromise} />
      </Suspense>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/allPackages")}
          className="btn btn-primary px-8 my-2"
        >
          Show All
        </button>
      </div>
      {/* Section 1 */}
      <DiscountBanner></DiscountBanner>

      {/* Section 2 */}
      <ExploreDestinations></ExploreDestinations>

      {/* Section 3: Customer Support */}
      <section className="my-16 px-6 max-w-6xl mx-auto bg-indigo-50 rounded-lg p-5 text-center">
        <h2 className="text-3xl font-bold mb-2 text-indigo-700">
          Customer Support
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          Our dedicated support team is available 24/7 to help you with your
          bookings, answer questions, and provide travel assistance.
        </p>
        <button
          className="btn btn-outline btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Contact Us
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <FiPhoneCall className="text-3xl text-green-600" />
            <a
              href="tel:0123455667"
              className="text-xl font-semibold text-green-700 hover:underline"
            >
              0123455667
            </a>
            <button
              className="ml-6 text-gray-500 hover:text-gray-800 text-xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
