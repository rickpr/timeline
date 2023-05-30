import React from 'react'
import 'sass/custom.scss'

import HBOMax from 'components/adalida_page/projects_page/hbo_max'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Projects } from 'theme_context'

const GainTainPage = () =>
  <ThemeContext.Provider value={Projects.HBOMax}>
    <ScrollProgress />
    <HBOMax />
  </ThemeContext.Provider>

export default GainTainPage
