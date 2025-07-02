import React from "react";
import Button from "../Shared/Button";

const ContactUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Head Office</h2>
            <p>8/1A Shomaj Kallan Road,Tongi-Gazipur, Dhaka</p>
            <p>Email: rakibhossen.dev@gmail.com</p>
            <p>Phone: +8801300981501</p>
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
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
