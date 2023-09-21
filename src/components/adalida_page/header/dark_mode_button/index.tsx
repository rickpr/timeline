import React, { useContext } from 'react'
import Icon from './icon'

import { ThemeContext } from 'theme_context'
import { glassStyles } from '../../styles'

const DarkModeButton = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const color = darkMode ? 'white' : 'black'
  const darkModeButtonStyle = {
    ...glassStyles,
    height: '40px',
    width: '40px',
    color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer' as const
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