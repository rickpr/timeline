import React from 'react'
import 'sass/custom.scss'

import Logi from 'components/adalida_page/projects_page/logi'
import Layout from 'components/adalida_page/layout'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Themes } from 'theme_context'

const LogiPage = () =>
  <ThemeContext.Provider value={Themes.Logi}>
    <ScrollProgress />
    <Layout><Logi /></Layout>
  </ThemeContext.Provider>

export default LogiPage
