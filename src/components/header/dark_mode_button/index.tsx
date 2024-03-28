import React, { useContext } from 'react'
import Icon from './icon'

import { ThemeContext } from 'theme_context'
import darkModeStyle from 'dark_mode_style'

const DarkModeButton = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = darkModeStyle(themeContext.darkMode, themeContext)
  const darkModeButtonStyle = {
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
      className='glass'
      style={darkModeButtonStyle}
      onClick={themeContext.toggleDarkMode}
    >
      <Icon darkMode={themeContext.darkMode} />
    </button>
  )
}

export default DarkModeButton
