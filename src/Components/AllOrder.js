import axios from 'axios'
import { useEffect, useState } from 'react'

const AllOrder = () => {
  const [data, setData] = useState([])
  const [datachanged, setDatachanged] = useState(false)
  useEffect(() => {
    axios
      .get('http://localhost:4000/orders')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [datachanged])

  const handleDelete = (id) => {
    axios
      .get(`http://localhost:4000/orderDelete/${id}`)
      .then((res) => {
        console.log(res)
        setDatachanged((prev) => !prev)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (data === []) return 'Loading...'
  return (
    <div>
      <h1>All Order</h1>

      {data.map((item) => (
        <div key={item._id}>
          <h1>Name : {item.name}</h1>
          <button
            className='py-4 px-6  mt-7 text-lg font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'
            onClick={() => handleDelete(item._id)}
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  )
}

export default AllOrder
