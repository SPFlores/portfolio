import React from 'react'
import { Github, Instagram, LinkedIn } from './images'
import './index.css'

const Contact = _ => {
  return (
    <div className='section' id='contact'>
      <h1 id='contact__header'>Contact</h1>
      <h2 id='contact__greeting'>Let's connect!</h2>
      <a id='contact__email' href='mailto:sflores92886@gmail.com' target='_blank' rel='noreferrer'>sflores92886@gmail.com</a>
      <div id='contact__socials'>
        <a className='contact__socials--icon' href='https://github.com/SPFlores' target='_blank' rel='noreferrer'><img src={Github} alt='github icon' class='contact__icon' /></a>
        <a className='contact__socials--icon' href='https://www.linkedin.com/in/samantha-flores-313024112/' target='_blank' rel='noreferrer'><img src={LinkedIn} alt='linkedin icon' class='contact__icon' /></a>
        <a className='contact__socials--icon' href='https://www.instagram.com/samurai_flo/' target='_blank' rel='noreferrer'><img src={Instagram} alt='instagram icon' class='contact__icon' /></a>
      </div>
      <div id='contact__madeby'>
        Made with <span id='contact__madeby--icon'>❤</span> by Sammi Flores
      </div>
    </div>
  )
}

export default Contact
