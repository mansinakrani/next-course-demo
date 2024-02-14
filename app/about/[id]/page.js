'use client'

import { redirect } from 'next/navigation'
import React from 'react'

const Id = ({params}) => {
  if(params.id == 4) {
    redirect('/login')
  }
  return (
    <div>
      <h1>Id: {params.id}</h1>
    </div>
  )
}

export default Id
