import React from 'react'

const NavLink = ({ href, text }) =>
  <li className="nav-item">
    <a href={href} className="nav-link">{text}</a>
  </li>

export default NavLink
