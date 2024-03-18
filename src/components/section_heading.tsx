import React, { useContext } from 'react'

import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

const SectionHeading = ({ title }: { title: string }): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(themeContext.darkMode, themeContext)
  return (
    <div className='section-heading-container'>
      <div>{title}</div>
      <div className='line' style={{ borderColor: color }}></div>
    </div>
  )
}

export default SectionHeading
