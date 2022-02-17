import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { ThemeContext } from 'theme_context'

const Header = () => {
  const borderColor = useContext(ThemeContext).primary || '#FFFFFF'
  const borderStyle = `0.25em solid ${borderColor}`
  const navbarStyles = {
    borderLeft: borderStyle,
    borderRight: borderStyle,
    borderTop: borderStyle
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

export default Header
