import React from 'react'
import 'sass/custom.scss'

import Zeno from 'components/adalida_page/projects_page/zeno'
import Layout from 'components/adalida_page/layout'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Themes } from 'theme_context'

const ZenoPage = () =>
  <ThemeContext.Provider value={Themes.Zeno}>
    <ScrollProgress />
    <Layout><Zeno /></Layout>
  </ThemeContext.Provider>

export default ZenoPage
