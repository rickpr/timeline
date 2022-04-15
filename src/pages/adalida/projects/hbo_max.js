import React from 'react'
import 'sass/custom.scss'

import HBOMax from 'components/adalida_page/projects_page/hbo_max'
import Layout from 'components/adalida_page/layout'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Themes } from 'theme_context'

const HBOMaxPage = () =>
  <ThemeContext.Provider value={Themes.HBOMax}>
    <ScrollProgress />
    <Layout><HBOMax /></Layout>
  </ThemeContext.Provider>

export default HBOMaxPage
