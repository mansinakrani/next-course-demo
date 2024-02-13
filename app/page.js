// Error: useRouter only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component

'use client'

import Link from 'next/link';
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
      <h1>useRouter</h1>
      <Link href="/projects">Projects</Link>
      <br/>
      {/* className='border px-2 py-4' */}
      <button onClick={() => router.push('about')}>Go to About Page</button>
      <br/>
      {/* Alternative (create seperate function) */}
      <button onClick={() => navigate('about')}>Go to About Page [on click using navigate()]</button>
      <br/>
      <button onClick={() => navigate('login')}>Go to Login Page</button>
    </section>
  )
}

export default Home
