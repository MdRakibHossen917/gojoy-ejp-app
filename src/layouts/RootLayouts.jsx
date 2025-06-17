import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer";

const RootLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-18">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;
