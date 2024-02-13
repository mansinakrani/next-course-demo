// Error: useRouter only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component

'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
    // router.push(`/${page}`);
  }

  return (
    <section>
      <h1>Ignoring routes</h1>
      <br/>
      <button onClick={() => navigate('login')}>Go to Login Page</button>
    </section>
  )
}

export default Home
