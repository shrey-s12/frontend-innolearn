import React from 'react';
import { Link } from 'react-router-dom';
import login_img from '../assets/signup/login_img.webp'; // Replace with your correct path

const LoginPage = () => {
    return (
        <div className="flex h-screen">

            <div className="w-1/2 hidden md:flex items-center justify-center p-10">
                <img
                    src={login_img}
                    alt="Illustration"
                    className="object-contain h-full"
                />
            </div>

            {/* Right Section - Login Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-2 md:p-16">

                {/* Title */}
                <h2 className="text-4xl font-semibold text-gray-900 mb-4 text-center">
                    Welcome Back
                </h2>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    Log in to continue your journey
                </p>

                {/* Form */}
                <div className="w-full max-w-sm">
                    {/* Input for Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    {/* Input for Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    {/* Forgot password */}
                    <div className="flex justify-end mb-4">
                        <Link to="/forgot-password" className="text-sm text-purple-600 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all">
                        Log In
                    </button>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-2 text-gray-500">OR</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Social Login Buttons */}
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                            <img src="google-icon-url" alt="Google" className="h-6 w-6" />
                        </button>
                        <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                            <img src="facebook-icon-url" alt="Facebook" className="h-6 w-6" />
                        </button>
                        <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
                            <img src="apple-icon-url" alt="Apple" className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Sign Up */}
                    <p className="text-center text-gray-600">
                        Don't have an account?
                        <Link to="/signup" className="text-purple-600 hover:underline ml-2">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
