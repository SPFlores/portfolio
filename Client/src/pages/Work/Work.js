import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WorkPage = _ => {
  const [workState, setWorkState] = useState({
    something: false
  })

  useEffect(_ => {
    axios.get('/projects')
      .then(({ data: projects }) => {
        console.log(projects)
      })
      .catch(e => console.log(e))
    // setWorkState({ ...workState, something: !workState.something })
  }, [])

  const doSomething = _ => {
    console.log(workState.something)
  }

  const doSomethingElse = _ => {
    setWorkState({ ...workState, something: !workState.something })
  }

  return (
    <div>
      <div>
        This is the *Work* page!
      </div>
      <button onClick={doSomething}>Click on me please</button>
      <br />
      <button onClick={doSomethingElse}>No click on me</button>
    </div>
  )
}

export default WorkPage
