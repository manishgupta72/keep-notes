import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div class="footer">
    <p>copyright © {year} </p>
  </div>
  )
}

export default Footer;