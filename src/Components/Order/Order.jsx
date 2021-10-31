import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";

const Order = () => {
  const { currentUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //Filtering
    data.email = currentUser.email;
    axios
      .post("https://dreadful-blood-69167.herokuapp.com/orders", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className=" text-3xl mt-5 rounded-lg ml-16 border-2 border-gray-600 w-56 p-4 bg-gray-500 text-gray-50">
        Booking Now{" "}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mt-6 p-3 border-2 ml-16  border-gray-500 rounded-lg "
          required
          placeholder="name"
          {...register("name")}
        />
        <br />
        <input
          className="mt-6 p-3 border-2 ml-16  border-gray-500 rounded-lg "
          type="email"
          required
          placeholder="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="mt-6 p-3 border-2 ml-16  border-gray-500 rounded-lg "
          required
          placeholder="Place"
          {...register("Place", { required: true })}
        />
        <br />
        <input
          className="mt-6 p-3 border-2 ml-16  border-gray-500 rounded-lg "
          type="number"
          required
          placeholder="phone number"
          {...register("phone", { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input
          className="mt-6 p-3 border-2 ml-16 rounded-lg bg-gray-600 text-white"
          type="submit"
        />
      </form>
    </>
  );
};

export default Order;
