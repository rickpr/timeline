import React, { useContext } from 'react'

import darkModeStyle from 'dark_mode_style'
import DarkModeContext from 'dark_mode_context'

const LetsChat = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { background, text } = darkModeStyle(!darkMode)
  return (
    <a className='lets-chat' href='mailto:hi@adalida.design' style={{ background, color: text }}>
      Let&apos;s Chat <span className='arrow' />
    </a>
  )
}

export default LetsChat
