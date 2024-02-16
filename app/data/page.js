import React from 'react'

async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

const Data = async () => {
  let product = await fetchData()
  console.log(product);

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
