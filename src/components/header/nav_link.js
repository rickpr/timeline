import { Link } from 'gatsby'
import React from 'react'

const NavLink = ({ href, text, width }) =>
  <div className={`nav-item col-md-${width} col-12`}>
    <h3><Link to={href} className="nav-link" activeClassName="active">{text}</Link></h3>
  </div>

export default NavLink
