import { Link } from 'gatsby'
import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'

import DarkModeButton from './dark_mode_button'

const Header = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const color = darkMode ? 'white' : 'black'

  const navElementStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    lineHeight: 1,
    border: 'none',
    pointerEvents: 'auto' as const,
    color
  }

  return (
    <div style={{
      width: '100dvw',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '18px 7.5dvw 0 7.5dvw'
    }}>
      <div style={navElementStyle}>
        <Link to='/adalida'>
          ADALIDA
        </Link>
      </div>
      <div style={navElementStyle}>
        <DarkModeButton />
      </div>
      <div style={navElementStyle}>
        <Link to='/adalida/about'>
          ABOUT
        </Link>
      </div>
    </div>
  )
}

export default Header
