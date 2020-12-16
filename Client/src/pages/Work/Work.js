import React, { useState, useEffect } from 'react'

const WorkPage = _ => {
  const [workState, setWorkState] = useState({
    something: false
  })

  // useEffect(_ => {
  //   setWorkState({ ...workState, something: !workState.something })
  // }, [])

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
