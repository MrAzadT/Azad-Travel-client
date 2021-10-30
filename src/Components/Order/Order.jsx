import React from "react";
import { useForm } from "react-hook-form";

const Order = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="mt-6 p-3 "
        required
        placeholder="name"
        {...register("example")}
      />
      <br />
      <input
        className="mt-6 p-3"
        type="email"
        required
        placeholder="email"
        {...register("exampleRequired", { required: true })}
      />
      <br />
      <input
        className="mt-6 p-3"
        type="number"
        required
        placeholder="phone number"
        {...register("exampleRequired", { required: true })}
      />

      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <input className="mt-6 p-3" type="submit" />
    </form>
  );
};

export default Order;
