import React from 'react'
import './index.css'

const Navbar = _ => {
  return (
    <div className='navbar'>
      <div id='navbar__left' className='navbar__item'>Portfolio || Samantha (Sammi) Flores</div>
      <div id='navbar__right' className='navbar__item'>
        <a className='navbar__link' href='#projects'>Projects</a>
        <a className='navbar__link' href='#about'>About</a>
        <a className='navbar__link' href='#skills'>Skills</a>
        {/* <a className='navbar__link' href='#resume'>Resume</a> */}
        <a className='navbar__link' href='#contact'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
