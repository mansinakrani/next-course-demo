import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className="login-menu border bg-green-400">
        <li>
          <Link href="/login">Login Main</Link>
        </li>
        <li>
          <Link href="/login/loginadmin">Login Admin</Link>
        </li>
        <li>
          <Link href="/login/loginuser">Login Regular User</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
