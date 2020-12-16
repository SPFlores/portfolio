import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/navbar'
import Greeting from '../Greeting'
import Work from '../Work'
import About from '../About'
import Skills from '../Skills'
import Resume from '../Resume'
import Contact from '../Contact'

const LandingPage = _ => {
  return (
    <div>
      <Navbar />
      <Greeting />
      <Work />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </div>
  )
}

export default LandingPage
