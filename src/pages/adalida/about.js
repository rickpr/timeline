import React from 'react'
import 'sass/custom.scss'

import AboutPage from 'components/adalida_page/about_page'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { aboutTheme, ThemeContext } from 'theme_context'

const About = () =>
  <ThemeContext.Provider value={aboutTheme}>
    <ScrollProgress />
    <AboutPage />
  </ThemeContext.Provider>

export default About
