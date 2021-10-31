import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Order from '../Order/Order'

const Booking = () => {
  const { bookingId } = useParams()
  console.log(bookingId)

  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:4000/singleData/${bookingId}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [bookingId])

  if (data === {}) return 'Loading...'

  return (
    <div>
      <img src={data.img} alt='img' />
      <h1>Country: {data.Country} </h1>
      <h1>Price: {data.Price} </h1>
      <h1>Rating: {data.Rating} </h1>
      <h1>name: {data.name} </h1>
      <Order />
    </div>
  )
}

export default Booking
