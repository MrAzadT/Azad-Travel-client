import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Order from "../Order/Order";

const Booking = () => {
  const { bookingId } = useParams();
  console.log(bookingId);

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://dreadful-blood-69167.herokuapp.com/singleData/${bookingId}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bookingId]);

  if (data === {}) return "Loading...";

  return (
    <div className=" flex">
      <div className="max-w-2xl mx-auto mt-11">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <img className="rounded-t-lg" src={data.img} alt="" />
          </a>
          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              Country : {data.Country}
            </h5>

            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Price: {data.Price}
            </p>

            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Rating: {data.Rating}
            </p>

            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              name: {data.name}
            </p>

            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Description : {data.des}
            </p>
          </div>
        </div>
      </div>
      <div className=" mr-28">
        <Order />
      </div>
    </div>
  );
};

export default Booking;
