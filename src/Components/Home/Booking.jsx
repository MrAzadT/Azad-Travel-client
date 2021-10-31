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
    <div>
      <img className="w-80 h-60 mt-16 ml-16" src={data.img} alt="img" />
      <h1 className="ml-16 mt-3">Country : {data.Country} </h1>
      <h1 className="ml-16 mt-3">Price: {data.Price} </h1>
      <h1 className="ml-16 mt-3">Rating: {data.Rating} </h1>
      <h1 className="ml-16 mt-3">name: {data.name} </h1>
      <h1 className="ml-16 mt-3 w-80">Description : {data.des} </h1>
      <Order />
    </div>
  );
};

export default Booking;
