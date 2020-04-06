import React from 'react'

const NavLink = ({ href, text, width }) =>
  <div className={`nav-item col-${width}`}>
    <a href={href} className="nav-link">{text}</a>
  </div>

export default NavLink
