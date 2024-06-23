import React from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'

import Background from './background'
import Footer from './footer'
import Header from './header'
import Page from './page'

interface Props {
  children: React.ReactNode
  darkMode: boolean | null
  toggleDarkMode: () => void
}

const Layout = (
  { children, darkMode, toggleDarkMode }: Props
): JSX.Element | null => {
  useAnimateOnScroll()

  if (darkMode === null) return null
  const { text: color } = darkModeStyle(darkMode)
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Background />
      <div style={{ color, transition: 'all 0.5s ease-in-out' }} data-nosnippet>
        <Header />
        <Page>{children}</Page>
        <div style={{ minHeight: '5em' }} />
        <Footer />
      </div>
    </DarkModeContext.Provider>
  )
}

export default Layout
