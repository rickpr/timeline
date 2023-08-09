import { Link } from 'gatsby'
import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'

import DarkModeButton from './dark_mode_button'

const Header = ({ showDarkModeButton }: { showDarkModeButton: boolean }): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const color = !showDarkModeButton || darkMode ? 'white' : 'black'

  const navElementStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    border: 'none',
    background: 'none',
    pointerEvents: 'auto' as const,
    color
  }

  return (
    <div style={{
      width: '100dvw',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1dvh 7.5dvw'
    }}>
      <div style={navElementStyle}>
        <Link to='/adalida'>
          ADALIDA
        </Link>
      </div>
      {showDarkModeButton &&
       <div style={navElementStyle}>
         {showDarkModeButton && <DarkModeButton />}
       </div>
      }
      <div style={navElementStyle}>
        <Link to='/adalida/about'>
          ABOUT
        </Link>
      </div>
    </div>
  )
}

export default Header
