import React from "react";
import { useForm } from "react-hook-form";

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:4000/userData", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="mt-6 p-3 border-2  border-gray-500 rounded-lg "
        required
        placeholder="name"
        {...register("name")}
      />
      <br />
      <input
        className="mt-6 p-3 border-2  border-gray-500 rounded-lg "
        type="email"
        required
        placeholder="email"
        {...register("email", { required: true })}
      />
      <br />
      <input
        className="mt-6 p-3 border-2  border-gray-500 rounded-lg "
        type="number"
        required
        placeholder="phone number"
        {...register("phone", { required: true })}
      />

      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <input className="mt-6 p-3 rounded-lg bg-gray-300" type="submit" />
    </form>
  );
};

export default Order;
