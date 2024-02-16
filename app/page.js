// Error: useRouter only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component

'use client'

import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const Home = () => {

  return (
    <section>
      <h1>Optimizations</h1>
      <br/>
      <h2 className={roboto.className}>Google Fonts</h2>
    </section>
  )
}

export default Home
