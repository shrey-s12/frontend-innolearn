import React from 'react';
import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Get the current location

  const isActive = (path) => {
    return location.pathname === path;  // Check if the link is active
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-6 flex items-center justify-between transform transition-shadow duration-300 ease-in-out">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-500 transition duration-300">
        InnoLearn
      </Link>

      {/* Categories */}
      <div className="hidden md:block">
        <button className="text-gray-600 hover:text-indigo-500 transition duration-300">
          Categories
        </button>
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
        <li>
          <Link
            to="/plan&Pricing"
            className={`hover:text-indigo-500 transition duration-300 ${isActive('/plan&Pricing') ? 'text-indigo-500 font-bold' : ''}`}
          >
            Plan & Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/innoLearnBusiness"
            className={`hover:text-indigo-500 transition duration-300 ${isActive('/innoLearnBusiness') ? 'text-indigo-500 font-bold' : ''}`}
          >
            InnoLearn Business
          </Link>
        </li>
        <li>
          <Link
            to="/teachOnUdemy"
            className={`hover:text-indigo-500 transition duration-300 ${isActive('/teachOnUdemy') ? 'text-indigo-500 font-bold' : ''}`}
          >
            Teach on Udemy
          </Link>
        </li>
      </ul>

      {/* Cart */}
      <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-500 transition duration-300">
        <MdOutlineShoppingCart className="text-gray-600" />
        <span className="text-gray-600">Cart</span>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button onClick={() => navigate("/login")} className="border border-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-600 transition duration-300 shadow-lg"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
