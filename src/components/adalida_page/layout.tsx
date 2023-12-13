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
  isAboutPage?: boolean
  setIsAboutPage?: (updateAboutPage: boolean | ((isAboutPage: boolean) => boolean)) => void
}

const Layout = (
  { children, theme, darkMode, toggleDarkMode, isAboutPage, setIsAboutPage }: Props
): JSX.Element => {
  const { background, text: color } = useDarkModeStyle(darkMode, theme)
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...theme }}>
      <Background background={background} />
      <div style={{ color, transition: 'all 0.5s ease-in-out' }}>
        <Header isAboutPage={isAboutPage} setIsAboutPage={setIsAboutPage} />
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
