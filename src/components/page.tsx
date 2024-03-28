import React, { useContext } from 'react'

import darkModeStyle from 'dark_mode_style'
import { ThemeContext } from 'theme_context'

const Page = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = darkModeStyle(themeContext.darkMode, themeContext)
  return <div style={{ color }} className='page'>{children}</div>
}

export default Page
