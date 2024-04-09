import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import darkModeStyle from 'dark_mode_style'

const SectionHeading = ({ title }: { title: string }): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = darkModeStyle(themeContext.darkMode, themeContext)
  return (
    <div className='section-heading-container'>
      <div>{title}</div>
      <div className='section-heading-line' style={{ borderColor: color }}></div>
    </div>
  )
}

export default SectionHeading
