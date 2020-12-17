import React from 'react'
import projects from './workInfo'
import WorkCard from '../../components/WorkCard'
import './index.css'

const WorkPage = _ => {
  console.log(projects)
  return (
    <div className='section' id='projects'>
      <h1 id='projects__heading'>Projects and Experience</h1>
      <div id='projects__cards'>
        {projects.map(project => {
          return <WorkCard work={project} />
        })}
      </div>
    </div>
  )
}

export default WorkPage
