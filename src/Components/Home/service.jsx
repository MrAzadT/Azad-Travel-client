import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/myData")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data === []) return "Loading...";

  return (
    <div>
      <h1 className="text-center text-4xl mt-16">Our Service</h1>
      <hr className="border-2 mt-8 border-primary bg-primary m-auto w-40" />
      <div className="grid xl:grid-cols-3 gap-10 m-auto mt-14 md:grid-cols-2 grid-cols-1 max-w-6xl">
        {data.map((item) => (
          <div key={item.Key} className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
              <a href="/">
                <img className="rounded-t-lg h-72" src={item.img} alt="" />
              </a>
              <div className="p-5">
                <a href="/">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {item.name}
                  </h5>
                </a>
                <p className="font-normal text-gray-700 mb-2">
                  Starting from ${item.Price}
                </p>
                <p className="font-normal text-gray-700 mb-2">
                  Rating : {item.Rating}
                </p>
                <p className="font-normal text-gray-700 mb-2">
                  Country : {item.Country}
                </p>
                <p className="font-normal text-gray-700 mb-2">
                  Time : {item.day}
                </p>

                <Link to={`/booking/${item._id}`}>
                  <button className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                    Booking Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
