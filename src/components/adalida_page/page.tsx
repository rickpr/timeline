import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/index.scss'

const pageStyle = {
  transition: 'all 0.5s ease-in-out',
  padding: '0 7.5dvw',
  gap: '1em',
  display: 'flex',
  flexDirection: 'column' as const,
  width: 'min(calc(950px + 15dvw), 100dvw)',
  margin: 'auto'
}

const Page = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(themeContext.darkMode, themeContext)
  return <div style={{ ...pageStyle, color }}>{children}</div>
}

export default Page
