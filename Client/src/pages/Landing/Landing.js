import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = _ => {
  // const [landingState, setLandingState] = useState({
  //   isLoggedIn: false
  // })

  // useEffect(_ => {
  //   if (sessionStorage.getItem('isLoggedIn') === 'true') {
  //     setLandingState({ ...landingState, isLoggedIn: true })
  //   } else {
  //     sessionStorage.setItem('isLoggedIn', false)
  //   }
  // }, [])

  return (
    <div>Hello and welcome!</div>
  )
}

export default LandingPage
