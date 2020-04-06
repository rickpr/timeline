import React from 'react'

const NavLink = ({ href, text, width }) =>
  <div className={`nav-item col-md-${width} col-12`}>
    <a href={href} className="nav-link">{text}</a>
  </div>

export default NavLink
