import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Footer = () => {  
  return (
    <footer className="  bg-[#00697F] text-white px-6 py-4 ">
      <div className="w-11/12   mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Address */}
        <div>
          <p>
            <img className="w-38 rounded-full" src={logo} alt="GoJoy Logo" />
          </p>
          <p>8/1A Shomajkallan road,Tongi-Gazipur, Dhaka</p>
          <p>Email: rakibhossen.dev@gmail.com</p>
          <p>Phone: +8801300981501</p>
        </div>

        {/* Useful Links */}
        <div className="lg:ml-35">
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
            <a
              href="https://www.facebook.com/md.rakib.hossen.41751"
              aria-label="Facebook"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/MdRakibHossen917"
              aria-label="Github"
              className="hover:text-sky-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/md-rakib-hossen-5b1aa3274/"
              aria-label="LinkedIn"
              className="hover:text-blue-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} GoJoy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
