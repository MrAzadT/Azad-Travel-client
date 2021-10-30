import React from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { bookingId } = useParams();
  console.log(bookingId);
  return (
    <div>
      <h1>Booking : {bookingId} </h1>
    </div>
  );
};

export default Booking;
