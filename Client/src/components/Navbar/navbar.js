import React from 'react'
import './index.css'

const Navbar = _ => {
  return (
    <div className='navbar'>
      <div id='navbar__left' className='navbar__item'>Portfolio</div>
      <div id='navbar__right' className='navbar__item'>
        <div className='navbar__link'>Something</div>
        <div className='navbar__link'>Something else</div>
        <div className='navbar__link'>Last thing</div>
      </div>
    </div>
  )
}

export default Navbar
