import React from "react";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
                src="https://res.cloudinary.com/abidazad/image/upload/v1635508524/pexels-olya-kobruseva-5227440_fwzxoz.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative ">
              <img
                alt="gallery"
                className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
                src="https://res.cloudinary.com/abidazad/image/upload/v1635508525/pexels-suzukii-xingfu-872831_hoy0ad.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
                src="https://res.cloudinary.com/abidazad/image/upload/v1635508506/pexels-adi-perets-4125993_vnedjb.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The 400 Blows
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
                src="https://res.cloudinary.com/abidazad/image/upload/v1635508507/pexels-pixabay-221457_esnkdo.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Neptune
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
                src="https://res.cloudinary.com/abidazad/image/upload/v1635508515/pexels-gabriela-palai-507410_qeqq52.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Holden Caulfield
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
                src="https://res.cloudinary.com/abidazad/image/upload/v1635508525/pexels-suzukii-xingfu-872831_hoy0ad.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Alper Kamu
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
