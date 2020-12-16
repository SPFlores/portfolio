import React, { useState, useEffect } from 'react'
import WorkCard from '../../components/workCard'
import axios from 'axios'

const WorkPage = _ => {
  const [workState, setWorkState] = useState({
    projects: [],
    experiences: []
  })

  useEffect(_ => {
    axios.get('/experiences')
      .then(({ data: experiences }) => {
        axios.get('/projects')
          .then(({ data: projects }) => {
            setWorkState({ ...workState, projects, experiences })
          })
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div>
      <h1>
        This is the *Work* page!
      </h1>
      <div>
        <h2>Experience</h2>
        {workState.experiences.length > 0 && workState.experiences.map(experience => {
          return <WorkCard work={experience} />
        })}
      </div>
      <div>
        <h2>Projects</h2>
        {workState.projects.length > 0 && workState.projects.map(project => {
          return <WorkCard work={project} />
        })}
      </div>
    </div>
  )
}

export default WorkPage
