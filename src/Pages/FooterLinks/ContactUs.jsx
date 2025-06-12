import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Head Office</h2>
            <p>123 GoJoy Street, Dhaka, Bangladesh</p>
            <p>Email: support@gojoy.com</p>
            <p>Phone: +880 1234-567890</p>
          </div>
          <div></div>
        </div>
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
