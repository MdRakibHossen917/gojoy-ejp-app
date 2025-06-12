import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import logInLottie from "../../assets/LoginLottie.json";

const LogIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    // TODO: Add actual login logic here
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google login functionality here
    console.log("Google Login clicked");
  };

  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse my-auto">
        {/* Login Form Card */}
        <div className="card bg-base-100 w-full max-w-sm p-6 shadow-2xl">
          <div className="card-body">
            <div className="text-center text-gray-800 mb-4">
              <h2 className="text-3xl font-bold mb-1">Please Sign in</h2>
              <p>You need to Sign in first to continue</p>
            </div>

            <form onSubmit={handleSignIn}>
              {/* Google Login */}
              <button
                type="button"
                className="btn bg-white text-black border-[#e5e5e5] w-full"
                onClick={handleGoogleLogin}
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  />
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  />
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  />
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  />
                </svg>
                Login with Google
              </button>

              <div className="divider">OR</div>

              {/* Email */}
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

              {/* Password */}
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

              <button type="submit" className="btn btn-neutral w-full">
                Log In
              </button>
              {/* Link Register */}
              <p className="text-center text-gray-800 mt-4">
                Don&apos;t have an account?
                <Link
                  to="/auth/register"
                  className="ml-1 text-blue-600 underline font-bold"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Lottie Animation - Only visible on large screens and up */}
        <div className="hidden lg:block text-center lg:text-left">
          <Lottie animationData={logInLottie} loop style={{ width: "400px" }} />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
