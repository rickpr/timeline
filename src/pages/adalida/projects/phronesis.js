import React from 'react'
import 'sass/custom.scss'

import Phronesis from 'components/adalida_page/projects_page/phronesis'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Projects } from 'theme_context'

const PhronesisPage = () =>
  <ThemeContext.Provider value={Projects.Phronesis}>
    <ScrollProgress />
    <Phronesis />
  </ThemeContext.Provider>

export default PhronesisPage
