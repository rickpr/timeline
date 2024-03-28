import React from 'react'

import { ThemeContext, type Theme } from 'theme_context'
import darkModeStyle from 'dark_mode_style'

import Background from './background'
import Header from './header'

interface Props {
  children: React.ReactNode
  theme: Theme
  darkMode: boolean | null
  toggleDarkMode: () => void
  isPortfolioPage?: boolean
  setIsPortfolioPage?: (updatePortfolioPage: boolean | ((isPortfolioPage: boolean) => boolean)) => void
}

const Layout = (
  { children, theme, darkMode, toggleDarkMode, isPortfolioPage, setIsPortfolioPage }: Props
): JSX.Element | null => {
  if (darkMode === null) return null
  const { text: color } = darkModeStyle(darkMode, theme)
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...theme }}>
      <Background />
      <div style={{ color, transition: 'all 0.5s ease-in-out' }}>
        <Header isPortfolioPage={isPortfolioPage} setIsPortfolioPage={setIsPortfolioPage} />
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
