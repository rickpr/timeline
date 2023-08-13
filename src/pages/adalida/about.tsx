import React from 'react'
import 'sass/custom.scss'

import AboutPage from 'components/adalida_page/about_page'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import useLocalStorage from 'hooks/use_local_storage'
import { AboutTheme, ThemeContext } from 'theme_context'

const About = (): JSX.Element => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode')
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, ...AboutTheme }}>
      <ScrollProgress />
      <AboutPage />
    </ThemeContext.Provider>
  )
}

export default About
