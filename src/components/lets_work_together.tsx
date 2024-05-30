import React, { useContext } from 'react'

import darkModeStyle from 'dark_mode_style'
import { ThemeContext } from 'theme_context'

const LetsWorkTogether = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background, text } = darkModeStyle(!darkMode)
  return (
    <a className='lets-work-together' href='mailto:hi@adalida.design' style={{ background, color: text }}>
      Let&apos;s Work Together <span className='arrow'>➜</span>
    </a>
  )
}

export default LetsWorkTogether
