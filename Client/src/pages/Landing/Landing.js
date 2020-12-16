import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = _ => {
  return (
    <div>
      <div className="topNav">Something here for the nav</div>
      <div className="welcome">Multiple things here for the welcome</div>
      <div className="work">Work goes here</div>
      <div className="about">About info goes here</div>
      <div className="skills">List skills here with level of proficiency</div>
      <div className="professionslStatement">Professional statement goes here, or link to resume?</div>
      <div className="contact">Contact info goes here</div>
    </div>
  )
}

export default LandingPage
