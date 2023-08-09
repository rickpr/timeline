import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { IconMoonStars } from '@tabler/icons-react'

import { ThemeContext } from 'theme_context'

const Header = ({ showDarkModeButton }: { showDarkModeButton?: boolean }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const color = !showDarkModeButton || darkMode ? 'white' : 'black'
  const darkModeButtonStyle = {
    border: 'none',
    background: 'none',
    color,
    display: 'flex',
    alignItems: 'flex-end'
  }

  const navElementStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    border: 'none',
    background: 'none',
    color
  }

  const darkModeButton = (
    <button
      style={darkModeButtonStyle}
      onClick={() => { setDarkMode(!darkMode) }}
    >
      <IconMoonStars />
    </button>
  )

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
      <div style={navElementStyle}>
        {showDarkModeButton && darkModeButton}
        <Link to='/adalida/about'>
          ABOUT
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {
  showDarkModeButton: PropTypes.bool
}

export default Header
