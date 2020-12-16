import React from 'react'
import './index.css'

const Contact = _ => {
  return (
    <div className='section' id='contact'>
      <h1 id='contact__header'>Contact</h1>
      <h2 id='contact__greeting'>Let's connect!</h2>
      <a id='contact__email' href='mailto:sflores92886@gmail.com'>sflores92886@gmail.com</a>
      <div id='contact__socials'>
        <span className='contact__socials--icon'>connect icon</span>
        <span className='contact__socials--icon'>connect icon</span>
        <span className='contact__socials--icon'>connect icon</span>
      </div>
      <div id='contact__madeby'>
        Made with ❤ by Sammi
      </div>
    </div>
  )
}

export default Contact
