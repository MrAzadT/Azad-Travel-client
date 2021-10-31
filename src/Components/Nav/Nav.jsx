import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center bg-gray-600 justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-3xl tracking-tight">
          Azad Travel
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/home"
            className="block text-lg mt-4 lg:inline-block lg:mt-0 text-white text-teal-200 hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/myOrder"
            className="block text-lg mt-4 lg:inline-block lg:mt-0 text-white text-teal-200 hover:text-white mr-4"
          >
            My Order
          </Link>
          <Link
            to="/allOrder"
            className="block mt-4 text-lg lg:inline-block text-white lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Manage All Order
          </Link>
          <Link
            to="/login"
            className="block mt-4 text-lg lg:inline-block text-white lg:mt-0 text-teal-200 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="block mt-4 ml-3 text-lg lg:inline-block text-white lg:mt-0 text-teal-200 hover:text-white"
          >
            LogOut
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
