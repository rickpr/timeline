import React from 'react'

import { ThemeContext, type Theme } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

import Background from './background'
import Header from './header'

interface Props {
  children: React.ReactNode
  theme: Theme
  darkMode: boolean
  toggleDarkMode: () => void
  isProfessionPage?: boolean
  setIsProfessionPage?: (updateProfessionPage: boolean | ((isProfessionPage: boolean) => boolean)) => void
}

const Layout = (
  { children, theme, darkMode, toggleDarkMode, isProfessionPage, setIsProfessionPage }: Props
): JSX.Element => {
  const { text: color } = useDarkModeStyle(darkMode, theme)
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...theme }}>
      <Background />
      <div style={{ color, transition: 'all 0.5s ease-in-out' }}>
        <Header isProfessionPage={isProfessionPage} setIsProfessionPage={setIsProfessionPage} />
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
