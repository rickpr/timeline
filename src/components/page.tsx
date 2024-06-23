import React, { useContext } from 'react'

import darkModeStyle from 'dark_mode_style'
import DarkModeContext from 'dark_mode_context'

const Page = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { text: color } = darkModeStyle(darkMode)
  return <div style={{ color }} className='page'>{children}</div>
}

export default Page
