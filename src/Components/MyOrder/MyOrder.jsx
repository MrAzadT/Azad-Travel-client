import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const MyOrder = () => {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [datachanged, setDatachanged] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://dreadful-blood-69167.herokuapp.com/myOrders/${currentUser.email}`
      )
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser, datachanged]);

  const handleDelete = (id) => {
    axios
      .get(`https://dreadful-blood-69167.herokuapp.com/orderDelete/${id}`)
      .then((res) => {
        console.log(res);
        setDatachanged((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (data === []) return "Loading...";
  return (
    <div>
      <h1 className="mt-16 text-4xl text-center ">My Order</h1>

      {data.map((item) => (
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1
                  key={item._id}
                  className="text-2xl font-semibold text-gray-700 capitalize dark:text-white"
                >
                  Name : {item.name}
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Email : {item.email}
                </p>

                <p className="text-gray-500 dark:text-gray-300">
                  Place : {item.Place}
                </p>

                <p className="text-gray-500 dark:text-gray-300">
                  Phone : {item.phone}
                </p>

                <button
                  className="py-3 px-6  mt-7 text-lg font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  onClick={() => handleDelete(item._id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MyOrder;
