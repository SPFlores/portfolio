import React from 'react'
import './index.css'

const Welcome = _ => {
  return (
    <div className='section' id='greeting'>
      <h1 id='greeting__name'>Hello, I'm Sammi Flores!</h1>
      <h2 id='greeting__description'>I am a full stack developer specializing in JavaScript, an avid learner, and a curious nerd. I'm also a great lover of coffee and Batman who makes D&D dice in my spare time.</h2>
      <p id='greeting__info'>As a developer I love working with Javascript, especially React or Next.js. Bonus points if I get to play around with Sass to make styling the pages more dynamic. I have professional experience in a fast-paced start-up environment and enjoy tackling challenges with a collaborative team of developers by my side.</p>
      <a id='greeting__button' href='mailto:sflores92886@gmail.com' target='_blank' rel='noreferrer'>Let's talk!</a>
    </div>
  )
}

export default Welcome
