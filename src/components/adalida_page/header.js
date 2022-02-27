import React, { useContext } from 'react'
import { Link } from 'gatsby'

import ScalableText from 'components/scalable_text'

import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/header.scss'

const Header = () => {
  const borderColor = useContext(ThemeContext).primary || '#FFFFFF'
  const borderStyle = `0.25em solid ${borderColor}`
  const navbarStyles = {
    borderLeft: borderStyle,
    borderRight: borderStyle,
    borderTop: borderStyle
  }

  return (
    <nav className='adalida-header' style={navbarStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%', margin: '0 auto', fontSize: '2vmax' }}>
        <div>
          <Link to='/adalida' style={{ color: '#FFFFFF' }}>
            ADALIDA
          </Link>
        </div>
        <div>
          <Link to='/adalida' style={{ color: '#FFFFFF' }}>
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
