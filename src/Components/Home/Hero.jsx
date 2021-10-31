import React from 'react'

const Hero = () => {
  return (
    <header>
      <div
        className='w-full bg-center bg-cover h-screen '
        style={{
          backgroundImage: ` url(https://res.cloudinary.com/abidazad/image/upload/v1635567569/pexels-pierre-blach%C3%A9-2901215_xdoo8o.jpg)`,
        }}
      >
        <div className='flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50'>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold text-white uppercase lg:text-5xl'>
              LET THE JOURNEY BEGIN
            </h1>
            <button className='py-4 px-6  mt-7 text-lg font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
