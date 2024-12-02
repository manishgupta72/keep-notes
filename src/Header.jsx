import React from 'react'
import logo from './assets/logoImage.png'

export const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" width='70' height='50' />
        <h1>Notes keep</h1>
    </div>
  )
}

export default Header;
