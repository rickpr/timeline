import React from 'react'
import 'sass/custom.scss'

import ZarasCleaning from 'components/adalida_page/projects_page/zaras_cleaning'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Projects } from 'theme_context'

const ZarasCleaningPage = () =>
  <ThemeContext.Provider value={Projects.ZarasCleaning}>
    <ScrollProgress />
    <ZarasCleaning />
  </ThemeContext.Provider>

export default ZarasCleaningPage
