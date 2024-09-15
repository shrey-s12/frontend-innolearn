import React from 'react';
import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg py-4 px-6 flex items-center justify-between transform transition-shadow duration-300 ease-in-out">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-800">InnoLearn</Link>

      {/* Categories */}
      <div className="hidden md:block">
        <button className="text-gray-600 hover:text-gray-800">Categories</button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-lg mx-4 shadow-inner">
        <MdOutlineSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for anything"
          className="bg-transparent outline-none w-full text-gray-600"
        />
      </div>

      {/* Links */}
      <ul className="hidden md:flex space-x-6 text-gray-600">
        <li><Link to="/plan&Pricing" className="hover:text-gray-800">Plan & Pricing</Link></li>
        <li><Link to="/innoLearnBusiness" className="hover:text-gray-800">InnoLearn Business</Link></li>
        <li><Link to="/teachOnUdemy" className="hover:text-gray-800">Teach on Udemy</Link></li>
      </ul>

      {/* Cart */}
      <div className="flex items-center space-x-2">
        <MdOutlineShoppingCart className="text-gray-600" />
        <span className="text-gray-600">Cart</span>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
          Login
        </button>
        <button className="bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-600 transition duration-300 shadow-lg">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
