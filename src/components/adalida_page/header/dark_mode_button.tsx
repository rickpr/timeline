import React, { useContext } from 'react'
import { IconMoonStars, IconSun } from '@tabler/icons-react'

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
      {darkMode ? <IconMoonStars /> : <IconSun />}
    </button>
  )
}

export default DarkModeButton
