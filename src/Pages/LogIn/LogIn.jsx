import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";
import logInLottie from "../../assets/LoginLottie.json";
import SocialLogIn from "../Shared/SocialLogIn";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import Button from "../Shared/Button";

const LogIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(`Login Failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Animation (hidden on mobile) */}
        <div className="hidden lg:block flex-1">
          <Lottie
            animationData={logInLottie}
            loop
            style={{ maxWidth: "500px", margin: "0 auto" }}
          />
        </div>

        {/* Form Card */}
        <div className="flex-1 w-full">
          <div className="card w-full bg-base-100 shadow-xl p-6 sm:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Sign in to continue to your account
              </p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-4">
              <SocialLogIn from={from} />
              <div className="divider">OR</div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="text-right">
                <a href="#" className="text-sm text-[#00809D] hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full">
                Log In
              </Button>

              <p className="text-center text-gray-700 text-sm mt-4">
                Don’t have an account?{" "}
                <Link
                  to="/auth/register"
                  className="text-[#00697F] font-semibold underline ml-1"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
