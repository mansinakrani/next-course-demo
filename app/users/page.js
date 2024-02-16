import React from 'react'
import BeachImage from '@/public/sean-oulashin.jpg'
import Image from 'next/image';

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <Image src={BeachImage} alt="Beach image by-Sean Oulashin" width={500} height={500}/>
      <Image src='https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww' alt="Beach image" width={500} height={500}/>
    </div>
  )
}

export default Users;

export const generateMetadata = () => {
  return {
    title: "Users Details Page",
    description: "All about user details",
  };
}