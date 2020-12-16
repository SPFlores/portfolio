import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WorkPage = _ => {
  const [workState, setWorkState] = useState({
    projects: []
  })

  useEffect(_ => {
    axios.get('/projects')
      .then(({ data: projects }) => {
        setWorkState({ ...workState, projects })
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div>
      <div>
        This is the *Work* page!
      </div>
      <br />
      <div>
        {workState.projects.length > 0 && workState.projects.map(project => {
          return (
            <div id={project.id} key={project.id} className='project_card'>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>{project.repoLink}</p>
              <p>{project.deployLink}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WorkPage
