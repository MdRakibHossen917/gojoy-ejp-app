import React from "react";
import { Link } from "react-router"; 

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img
        src={"https://i.ibb.co/qMGmbKMT/error.jpg"}
        alt="404 Not Found"
        className="w-full max-w-md mx-auto mb-8"
      />
      <h1 className="text-4xl font-bold text-red-500 mb-2">
        Oops! You seem lost in the Himalayas.
      </h1>
      <p className="text-lg mb-6 text-gray-500">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
