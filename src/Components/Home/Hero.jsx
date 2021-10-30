import React from "react";

const Hero = () => {
  return (
    <header>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <a
                  className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  href="/"
                >
                  Azad Travel
                </a>
              </div>
              <div className=" mx-4  ">
                <a
                  href="/"
                  className="block mx-4 mt-2 text-lg text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="w-full bg-center bg-cover h-screen "
        style={{
          backgroundImage: ` url(https://res.cloudinary.com/abidazad/image/upload/v1635567569/pexels-pierre-blach%C3%A9-2901215_xdoo8o.jpg)`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-5xl">
              LET THE JOURNEY BEGIN
            </h1>
            <button className="  py-4 px-6  mt-7 text-lg font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
