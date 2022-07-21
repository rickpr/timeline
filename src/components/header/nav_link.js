import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const NavLink = ({ href, text, width }) =>
  <div className={`nav-item col-md-${width} col-12`}>
    <h3><Link to={href} className='nav-link' activeClassName='active'>{text}</Link></h3>
  </div>

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
}

export default NavLink
