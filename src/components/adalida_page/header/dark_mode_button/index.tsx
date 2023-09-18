import React, { useContext } from 'react'
import Icon from './icon'

import { ThemeContext } from 'theme_context'

const DarkModeButton = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const color = darkMode ? 'white' : 'black'
  const darkModeButtonStyle = {
    borderRadius: '30px',
    height: '40px',
    width: '40px',
    border: '1px solid rgba(255, 255, 255, 0.10)',
    background: 'linear-gradient(159deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 100.06%)',
    boxShadow: '0px 4px 24px -1px rgba(21, 33, 99, 0.25)',
    backdropFilter: 'blur(20px)',
    color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <button
      style={darkModeButtonStyle}
      onClick={toggleDarkMode}
    >
      <Icon darkMode={darkMode} />
    </button>
  )
}

export default DarkModeButton
