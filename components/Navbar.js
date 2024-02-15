'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname()
  // console.log(pathname)
  return (
    <div>
      {pathname === "/login/loginadmin" ?(
        <li>
          <Link href="/login/loginadmin">Login Admin</Link>
        </li>
      ) : (
        <ul className="login-menu border">
          {/* <li>
            <Link href="/login">Login Main</Link>
          </li> */}
          <li>
            <Link href="/login/loginuser">Login Regular User</Link>
          </li>
        </ul>
      )}
      
    </div>
  )
}

export default Navbar
