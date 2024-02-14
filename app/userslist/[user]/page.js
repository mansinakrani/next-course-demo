'use client'
// http://localhost:3000/userslist/joy => params = { user: 'joy' }
import React from 'react'

const User = ({params}) => {
  console.log(params)
  return (
    <div>
      <h1>Info about {params.user}</h1>
      <p>Hello!! I&apos;m {params.user}</p>
    </div>
  )
}

export default User
