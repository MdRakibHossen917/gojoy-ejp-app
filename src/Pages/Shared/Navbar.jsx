import React, { useState, useContext, useEffect, useRef } from "react";
import { MdLogin } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Dropdown wrapper ref
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allPackages">All Packages</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="myBookings">My Bookings</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to log out!");
      });
  };

  return (
    <div>
      <div className="navbar bg-neutral-content shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <div>
              <Link to="/">
                <img
                  className="w-18 ml-2  hidden sm:block"
                  src="https://i.ibb.co/8D4d4yK6/gojoy-logo-transparent.png"
                  alt="GoJoy Logo"
                />
              </Link>
            </div>
            <div>
              <h1 className="font-bold text-xl  text-info-content  ">
                Go<span className="text-warning text-2xl">Joy</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {/*theme controller */}
          <div className="mr-1 lg:mr-3">
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller"
            />
          </div>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center btn cursor-pointer rounded-full  w-20"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="avatar avatar-online avatar-placeholder">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/YTjW3vF/default-profile.jpg"
                      }
                      alt="User Photo"
                    />
                  </div>
                </div>
                <div
                  className={`transform transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <RiArrowDropDownLine size={35} />
                </div>
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 p-5 w-60 lg:w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1 text-center">
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/YTjW3vF/default-profile.jpg"
                      }
                      alt="Profile"
                      className="w-16 h-16 rounded-full mx-auto"
                    />
                    <p className="font-semibold my-2">{user.email}</p>
                    <hr className="my-2" />

                    <ul className="space-y-2 text-left">
                      <li>
                        <NavLink
                          to="/addPackage"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Add Package
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/manage-my-packages"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Manage My Packages
                        </NavLink>
                      </li>
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          LogOut
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to={"/auth/logIn"} className="btn btn-primary">
              <MdLogin size={25} /> LogIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
