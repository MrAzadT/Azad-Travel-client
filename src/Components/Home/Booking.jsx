import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { bookingId } = useParams();
  console.log(bookingId);

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
      <h1>Booking : {bookingId} </h1>
    </div>
  );
};

export default Booking;
