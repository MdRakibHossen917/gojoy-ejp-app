import React from "react";
import { MdLogin } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allPackages">All Packages</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us </NavLink>
      </li>

      {/* {user && (
            <li>
              <NavLink to="/myApplications">My Applications</NavLink>
            </li>
          )} */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* <Link to="/" className="text-xl font-bold ml-2">
            GoJoy
          </Link> */}
          <Link to="/">
            <img
              className="w-18 ml-2"
              src="https://i.ibb.co/8D4d4yK6/gojoy-logo-transparent.png"
              alt="GoJoy Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/auth/logIn"} className="btn btn-primary">
            <MdLogin size={25} />
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
