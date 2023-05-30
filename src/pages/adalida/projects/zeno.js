import React from 'react'
import 'sass/custom.scss'

import Zeno from 'components/adalida_page/projects_page/zeno'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Projects } from 'theme_context'

const ZenoPage = () =>
  <ThemeContext.Provider value={Projects.Zeno}>
    <ScrollProgress />
    <Zeno />
  </ThemeContext.Provider>

export default ZenoPage
