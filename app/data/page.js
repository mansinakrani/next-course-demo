'use client'
import React, { useEffect, useState } from 'react'

const Data = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      setProduct(data);
      console.log(data);
    }
    fetchData()
  }, [])

  return (
    <div>
      <ul>
        {product.map((item) => (
          <li className='border m-5 py-2 px-4' key={item.id}>
            <h2>{item.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Data
