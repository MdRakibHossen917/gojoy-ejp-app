import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import regLottie from "../../assets/registerLottie.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Shared/Button";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handlerRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validation
    if (!name || !email || !password) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[0-9]/.test(password)) {
      toast.error("Password must contain at least one number.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password must contain at least one special character.");
      return;
    }

    // Create user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User registered successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => {
            console.log("Profile update error:", error.message);
          });
      })
      .catch((error) => {
        console.log("Signup error:", error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Animation Section */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Lottie
            animationData={regLottie}
            loop
            style={{ maxWidth: "500px", width: "100%" }}
          />
        </div>
        {/* Form Section */}
        <div className="flex-1 w-full">
          <div className="card w-full max-w-md mx-auto bg-base-100 shadow-xl p-6 sm:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Create a new account
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-[#00697F] font-semibold underline ml-1"
                >
                  Log In
                </Link>
              </p>
            </div>

            <form onSubmit={handlerRegister} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input input-bordered w-full"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input input-bordered w-full"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="photoURL"
                  className="block text-sm font-medium mb-1"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="input input-bordered w-full"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="input input-bordered w-full"
                  placeholder="Confirm Password"
                />
              </div>
              <Button type="submit" className="w-full font-semibold">
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
