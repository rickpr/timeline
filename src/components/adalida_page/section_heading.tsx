import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

const containerStyles = {
  fontSize: '1em',
  fontWeight: 600,
  display: 'flex',
  gap: '25px',
  alignItems: 'center',
  width: '100%'
}

const lineStyles = {
  minWidth: '100px',
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderRadius: '5px',
  height: 0,
  transition: 'all 0.5s ease-in-out'
}

const SectionHeading = ({ title }: { title: string }): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(themeContext.darkMode, themeContext)
  return (
    <div style={containerStyles}>
      <div>{title}</div>
      <div style={{ ...lineStyles, borderColor: color }}></div>
    </div>
  )
}

export default SectionHeading
