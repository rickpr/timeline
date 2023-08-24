import React from 'react'
import 'sass/custom.scss'

import AboutPage from 'components/adalida_page/about_page'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import useDarkMode from 'hooks/use_dark_mode'
import { AboutTheme, ThemeContext } from 'theme_context'

const About = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...AboutTheme }}>
      <ScrollProgress />
      <AboutPage />
    </ThemeContext.Provider>
  )
}

export default About
