import React, { useContext } from 'react'
import Icon from './icon'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'

const DarkModeButton = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const { text: color } = darkModeStyle(darkMode)
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
      onClick={toggleDarkMode}
    >
      <Icon darkMode={darkMode} />
    </button>
  )
}

export default DarkModeButton
