'use client'

import { useState } from 'react'

const AddNewUser = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const addUser = async () => {
    console.log(name, age, email)
    let response = await fetch('api/users', {
      method: 'POST',
      body: JSON.stringify({ name, age, email }),
    })

    response = await response.json()

    if (response.ok) {
      alert('User successfully created')
    } else {
      alert('An Error Occured While Creating The User')
    }

    console.log(response)
  }

  return (
    <div>
      <h1>Add New User</h1>
      <br />
      <hr />
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Enter Name"
        className='ml-2 mr-4 mt-4'
      />
      <br />
      <input
        onChange={(e) => setAge(e.target.value)}
        value={age}
        type="number"
        placeholder="Enter Age"
        className='ml-2 mr-4 mt-4'
      />
      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Email"
        className='ml-2 mr-4 mt-4'
      />{' '}
      <br />
      <button className="bg-black text-white border p-2 m-4" onClick={addUser}>
        Add User
      </button>
    </div>
  )
}

export default AddNewUser
