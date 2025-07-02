import React from "react";

const blogs = [
  {
    id: 1,
    title: "Explore the World with GoJoy",
    date: "July 1, 2025",
    description:
      "GoJoy makes your travel dreams a reality. Discover top destinations, book instantly, and enjoy hassle-free adventures with our smart tour package system.",
    image:
      "https://i.ibb.co/b5tHhww3/top-view-young-travelling-girl-medical-mask-collecting-her-luggage-holding-map-listening-last-gossip.jpg",
  },
  {
    id: 2,
    title: "Why GoJoy is Your Perfect Travel Companion",
    date: "June 25, 2025",
    description:
      "With secure booking, flexible schedules, and verified packages, GoJoy stands out as the trusted choice for travelers in Bangladesh and beyond.",
    image: "https://i.ibb.co/k2y3kYQj/unsplash-image-Cecb0-8-Hx-o.jpg",
  },
  {
    id: 3,
    title: "How to Book Your First Tour with GoJoy",
    date: "June 15, 2025",
    description:
      "New to GoJoy? Learn how to search for tours, compare packages, and confirm your bookings in just a few easy steps!",
    image:
      "https://i.ibb.co/Z6qkr1kD/adventurers-hike-up-mountain-sunset-silhouetted-against-vibrant-skies-showcasing-beauty-nature-explo.jpg",
  },
];

const Blogs = () => {
  return (
    <section className="px-4 py-12 md:px-10 lg:px-20 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#00809D]">
        GoJoy Travel Blogs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="text-black rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2   text-black">
                {blog.title}
              </h3>
              <p className="text-sm text-black mb-3">{blog.date}</p>
              <p className="text-black mb-4">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
