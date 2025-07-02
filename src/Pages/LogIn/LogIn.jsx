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
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse my-auto">
        <div className="card bg-base-100 w-full max-w-sm p-6 shadow-2xl">
          <div className="card-body">
            <div className="text-center text-gray-800 mb-4">
              <h2 className="text-3xl font-bold mb-1">Please Sign in</h2>
              <p>You need to Sign in first to continue</p>
            </div>

            <form onSubmit={handleSignIn}>
              <SocialLogIn from={from}></SocialLogIn>
              <div className="divider">OR</div>

              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />

              <label htmlFor="password" className="label mt-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
                required
              />

              <div className="mt-2 mb-4">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>
              <Button type="submit" className="w-full">
               
                Log In
              </Button>

             

              <p className="text-center text-gray-800 mt-4">
                Don&apos;t have an account?{" "}
                <Link
                  to="/auth/register"
                  className="ml-1 text-[#00697F] underline font-bold"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="hidden lg:block text-center lg:text-left">
          <Lottie animationData={logInLottie} loop style={{ width: "400px" }} />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
