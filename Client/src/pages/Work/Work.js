import React from 'react'
import './index.css'
import projects from './workInfo'

const WorkPage = _ => {
  console.log(projects)
  return (
    <div className='section' id='projects'>
      <h1 id='projects__heading'>Projects and Experience</h1>
      <div>This is a work card</div>
      <div>This is a work card</div>
      <div>This is a work card</div>
      <div>This is a work card</div>
      <div>This is a work card</div>
      <div>This is a work card</div>
    </div>
  )
}

export default WorkPage
