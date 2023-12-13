import React, { useContext } from 'react'
import Icon from './icon'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { glassStyles } from '../../styles'

const DarkModeButton = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(themeContext.darkMode, themeContext)
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
      onClick={themeContext.toggleDarkMode}
    >
      <Icon darkMode={themeContext.darkMode} />
    </button>
  )
}

export default DarkModeButton
