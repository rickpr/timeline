import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/header.scss'

const Header = () => {
  const borderColor = useContext(ThemeContext).border || '#FFFFFF'
  const borderStyle = `0.25vh solid ${borderColor}`
  const linkStyle = { color: '#FFFFFF', pointerEvents: 'all' }
  const borderStyles = {
    borderLeft: borderStyle,
    borderRight: borderStyle,
    borderTop: borderStyle,
    zIndex: 3
  }

  return (
    <>
      <nav className='adalida-header' style={{ mixBlendMode: 'difference' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '95%',
            margin: '0 auto',
            fontSize: '3vh',
            padding: '1vh'
          }}
        >
          <div>
            <Link to='/adalida/apps' style={linkStyle}>
              ADALIDA
            </Link>
          </div>
          <div>
            <Link to='/adalida' style={linkStyle}>
              ABOUT
            </Link>
          </div>
        </div>
      </nav>
      <nav className='adalida-header' style={borderStyles} />
    </>
  )
}

export default Header
