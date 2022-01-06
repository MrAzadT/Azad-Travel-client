import React from "react";

const TravelNews = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto max-w-7x1">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl  font-bold title-font mb-2 text-gray-900">
              Travel News
            </h1>
            <div className="h-1 w-52 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
              <img
                alt=""
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded-lg w-full object-cover object-center mb-6"
                src="https://res.cloudinary.com/abidazad/image/upload/v1635508528/pexels-alexandr-podvalny-2166553_utgnvc.jpg"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Azad Travel
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                TRAVEL NEWS, BRITAIN
              </h2>
              <p className="leading-relaxed text-base">
                UK removes all the countries from its COVID-19 'red list' In the
                latest COVID travel development, the UK has removed all the
                countries from its COVID-19 red list. The British government
                on...
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
              <img
                alt=""
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-lg w-full object-cover object-center mb-6"
                src="https://res.cloudinary.com/abidazad/image/upload/v1635508525/pexels-suzukii-xingfu-872831_hoy0ad.jpg"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Azad Travel
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                TRAVEL NEWS, INDIA
              </h2>
              <p className="leading-relaxed text-base">
                India extends ban on scheduled international flights till
                November 30 Earlier last month, the DGCA extended the ban till
                October 31. Like the previous order, the DGCA will not be
                restricting internati...
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
              <img
                alt=""
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-lg w-full object-cover object-center mb-6"
                src="https://res.cloudinary.com/abidazad/image/upload/v1635508524/pexels-olya-kobruseva-5227440_fwzxoz.jpg"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Azad Travel
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                TRAVEL NEWS, WORLD
              </h2>
              <p className="leading-relaxed text-base">
                Direct flights between Delhi-Sydney to start from November 15
                India’s national-carrier Air India has announced plans to resume
                direct, non-stop flights between Delhi and Sydney from November
                1...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelNews;
