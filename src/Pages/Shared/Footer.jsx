import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {  
  return (
    <footer className="bg-gray-900 text-white px-6 py-4 ">
      <div className="w-11/12   mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Address */}
        <div className="ml-10">
          <p>
            <img
              className="w-18 rounded-full"
              src="https://i.ibb.co/HDh4gGcC/Chat-GPT-Image-Jun-9-2025-11-35-10-PM.png"
              alt="GoJoy Logo"
            />
          </p>
          <p>123 Main Street, Dhaka, Bangladesh</p>
          <p>Email: support@gojoy.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>

        {/* Useful Links */}
        <div className="ml-35">
          <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
          <ul className="space-y-1">
            <li>
              <NavLink to={"/FooterLayout/termsConditions"}>
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/FooterLayout/privacyPolicy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/FooterLayout/contactUs">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/FooterLayout/aboutFooterUs">About Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="ml-25">
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} GoJoy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
