import React from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import { ThemeContext } from 'theme_context'
import type { Theme } from 'themes'
import darkModeStyle from 'dark_mode_style'

import Background from './background'
import Footer from './footer'
import Header from './header'
import Page from './page'

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
  useAnimateOnScroll()

  if (darkMode === null) return null
  const { text: color } = darkModeStyle(darkMode, theme)
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...theme }}>
      <Background />
      <div style={{ color, transition: 'all 0.5s ease-in-out' }} data-nosnippet>
        <Header isPortfolioPage={isPortfolioPage} setIsPortfolioPage={setIsPortfolioPage} />
        <Page>{children}</Page>
        <div style={{ minHeight: '5em' }} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
