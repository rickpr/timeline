import React, { useContext } from 'react'
import Icon from './icon'

import { ThemeContext } from 'theme_context'

const DarkModeButton = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const color = darkMode ? 'white' : 'black'
  const darkModeButtonStyle = {
    border: 'none',
    background: 'none',
    color,
    display: 'flex'
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
