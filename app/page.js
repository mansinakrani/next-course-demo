// Error: useRouter only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component

'use client'

import React from 'react'

const Home = () => {

  return (
    <section>
      <h1>Catch All routes</h1>
      <br/>
    </section>
  )
}

export default Home
