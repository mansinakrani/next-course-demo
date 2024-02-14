'use client'

import React from 'react'

const Projects = ({ params }) => {
  // console.log(params)
  return (
    <div>
      <h1>Project {params.all}</h1>
      <br/>
      All routes
      {params.all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  )
}

export default Projects
