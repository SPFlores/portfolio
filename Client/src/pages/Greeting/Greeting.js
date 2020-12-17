import React from 'react'
import './index.css'

const Welcome = _ => {
  return (
    <div className='section' id='greeting'>
      <h1 id='greeting__name'>Hello, I'm Sammi Flores!</h1>
      <h2 id='greeting__description'>I am a full stack developer specializing in front end development, an avid learner, and a curious nerd.</h2>
      <p id='greeting__info'>I love to play around in Javascript, especially React, and enjoy making powerful web pages with clean, reusable code. I have professional experience in a fast-paced start-up environment and enjoy tackling challenges with a collaborative team of developers by my side.</p>
      <a id='greeting__button' href='mailto:sflores92886@gmail.com' target='_blank' rel='noreferrer'>Let's talk!</a>
    </div>
  )
}

export default Welcome
