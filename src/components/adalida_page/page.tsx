import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

const Page = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(themeContext.darkMode, themeContext)
  return <div style={{ color }} className='page'>{children}</div>
}

export default Page
