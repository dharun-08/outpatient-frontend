/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/imagelogin.png";

const Login = () => {
  return (
    <div className="container-main flex h-screen">
      {/* Left Side Image */}
      <div className="container-left w-1/2 h-full flex items-center justify-center">
        <img className="h-full object-cover" src={Image} alt="Login Visual" />
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center">
        <div className="container-login-form w-[400px] bg-white rounded-2xl p-8 shadow-xl">
          <form className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              Login
            </h1>

            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="password"
              placeholder="Enter your Password"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Submit
            </button>

            <p className="text-sm text-center text-gray-600 mt-2">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
