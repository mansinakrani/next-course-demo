import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className='logo'>
          {/* <img src="/logo.png" alt="Logo" /> */}
          <h1>Logo</h1>
        </div>
        <div className='links-container'>
          <Link className='link' href="/">Home</Link>
          <Link className='link' href="/about">About</Link>
          <Link className='link' href="/portfolio">Portfolio</Link>
        </div>
      </ul> 
    </nav>
  )
}

export default Navbar
