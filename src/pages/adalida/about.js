import React from 'react'
import 'sass/custom.scss'

import AboutPage from 'components/adalida_page/about_page'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext } from 'theme_context'

const About = () =>
  <ThemeContext.Provider>
    <ScrollProgress />
    <AboutPage />
  </ThemeContext.Provider>

export default About
