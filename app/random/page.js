import React from 'react'

const Page = () => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.JWT_SECRET);
  console.log(process.env.MONGO_URL);
  return (
    <div>
      <strong>Random Page</strong>
      {process.env.MONGO_URL ? (
        <h1>DB Successfully Connected</h1>
      ) : (
        <h1>404 DB Not Found</h1>
      )}
    </div>
    
  )
}

export default Page
