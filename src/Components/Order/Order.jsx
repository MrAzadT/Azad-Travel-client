import axios from 'axios'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../Context/AuthProvider'

const Order = () => {
  const { currentUser } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    //Filtering
    data.email = currentUser.email
    axios
      .post('http://localhost:4000/orders', data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className='mt-6 p-3 border-2  border-gray-500 rounded-lg '
        required
        placeholder='name'
        {...register('name')}
      />
      <br />
      <input
        className='mt-6 p-3 border-2  border-gray-500 rounded-lg '
        type='email'
        required
        placeholder='email'
        {...register('email', { required: true })}
      />
      <input
        className='mt-6 p-3 border-2  border-gray-500 rounded-lg '
        required
        placeholder='Place'
        {...register('Place', { required: true })}
      />
      <br />
      <input
        className='mt-6 p-3 border-2  border-gray-500 rounded-lg '
        type='number'
        required
        placeholder='phone number'
        {...register('phone', { required: true })}
      />

      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <input className='mt-6 p-3 rounded-lg bg-gray-300' type='submit' />
    </form>
  )
}

export default Order
