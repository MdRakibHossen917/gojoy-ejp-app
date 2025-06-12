import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router"; // use react-router-dom
import Footer from "../Pages/Shared/Footer";

const RootLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content area with fixed height and scroll */}
      <div style={{ height: "calc(100vh - 88px)", overflowY: "auto" }}>
        <Outlet />
      </div>
       

      <Footer />
    </div>
  );
};

export default RootLayouts;
