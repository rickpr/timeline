import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'
import Header from './header'
import Footer from './footer'
import SocialFooter from './social_footer'

const Project = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background, text } = useDarkModeStyle(darkMode)
  const style = {
    transition: 'background-color 0.5s ease-in-out',
    background,
    color: text
  }
  return (
    <div style={style}>
      <Header />
      {children}
      <Footer />
      <SocialFooter />
    </div>
  )
}

export default Project
