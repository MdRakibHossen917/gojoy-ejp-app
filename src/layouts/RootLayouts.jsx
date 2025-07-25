import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer";

const RootLayouts = () => {
  return (
    <div className="bg-white">
      <div className="mt-18">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-72px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;
