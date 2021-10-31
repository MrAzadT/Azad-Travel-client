import axios from "axios";
import { useEffect, useState } from "react";

const AllOrder = () => {
  const [data, setData] = useState([]);
  const [datachanged, setDatachanged] = useState(false);
  useEffect(() => {
    axios
      .get("https://dreadful-blood-69167.herokuapp.com/orders")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [datachanged]);

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
      <h1 className="mt-16 text-4xl text-center">All Order</h1>

      {data.map((item) => (
        <div
          className="border-2 m-auto border-gray-600 mt-16 w-60 h-60 text-center rounded-lg "
          key={item._id}
        >
          <h1>Name : {item.name}</h1>
          <h1>Email : {item.email}</h1>
          <h1>PLace : {item.Place}</h1>
          <h1>Phone : {item.phone}</h1>
          <button
            className="py-4 px-6  mt-7 text-lg font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            onClick={() => handleDelete(item._id)}
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllOrder;
