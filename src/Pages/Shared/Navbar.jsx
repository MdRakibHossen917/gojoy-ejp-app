import React, { useState, useContext, useEffect, useRef } from "react";
import { MdLogin } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import Button from "./Button";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Logged out successfully!"))
      .catch(() => toast.error("Failed to log out!"));
  };

  const links = (
    <>
      <li>
        <NavLink to="/" >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allPackages">
          All Packages
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myBookings" >
            My Bookings
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/blogs" >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#00809D] text-white   fixed top-0 w-full z-50  ">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown relative">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-box w-52 z-[999]"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="ml-2">
          <img
            src={logo}
            alt="GoJoy Logo"
            className="w-24 sm:w-20 md:w-32 lg:w-36"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-2 pr-4">
        {/* Theme Toggle - Small Size */}
        <label className="cursor-pointer flex items-center">
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller scale-75 sm:scale-90 md:scale-100 transition duration-200"
          />
        </label>

        {/* Auth Section */}
        {loading ? (
          <div className="skeleton w-24 h-10 rounded bg-[#00809D] dark:bg-[#00809D]"></div>
        ) : user ? (
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center cursor-pointer space-x-1"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/YTjW3vF/default-profile.jpg"
                    }
                    alt="user"
                  />
                </div>
              </div>
              <RiArrowDropDownLine
                size={30}
                className={`transition ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 top-14 w-72 sm:w-64 rounded-lg shadow-lg p-4 z-50 bg-white text-gray-800 dark:bg-[#00809D] dark:text-white transition-all">
                <div className="text-center mb-3">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/YTjW3vF/default-profile.jpg"
                    }
                    alt="Profile"
                    className="w-16 h-16 rounded-full mx-auto"
                  />
                  <p className="text-sm font-medium mt-2">{user.email}</p>
                </div>

                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/addPackage"
                      className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-white dark:hover:text-[#00809D]"
                    >
                      Add Package
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manage-my-packages"
                      className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-white dark:hover:text-[#00809D]"
                    >
                      Manage My Packages
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-white dark:hover:text-[#00809D]"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Button className=" border-none shadow-4xl px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3 text-sm sm:text-base md:text-lg">
            <Link
              to="/auth/logIn"
              className="flex items-center gap-1 sm:gap-2 md:gap-2.5"
            >
              <MdLogin className="text-base sm:text-lg md:text-xl" />
              <span>Log In</span>
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
