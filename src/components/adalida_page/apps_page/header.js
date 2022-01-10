import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ color }) => {
  const navbarStyles = {
    borderLeft: `0.25em solid ${color}`,
    borderRight: `0.25em solid ${color}`,
    borderTop: `0.25em solid ${color}`,
  }

  return (
    <nav className='adalida-navbar' style={navbarStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '0 auto' }}>
        <div>
          <h1><Link to='/adalida' style={{ color: '#FFFFFF' }}>ADALIDA BACA</Link></h1>
        </div>
        <div>
          <h1><Link to='/adalida' style={{ color: '#FFFFFF' }}>ABOUT</Link></h1>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = { color: PropTypes.string.isRequired }

export default Header
