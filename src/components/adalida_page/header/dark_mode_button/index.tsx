import React, { useContext } from 'react'
import Icon from './icon'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { glassStyles } from '../../styles'

const DarkModeButton = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(darkMode)
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
