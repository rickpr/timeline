import React from 'react'
import 'sass/custom.scss'

import Cyph from 'components/adalida_page/projects_page/cyph'
import Layout from 'components/adalida_page/layout'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Themes } from 'theme_context'

const CyphPage = () =>
  <ThemeContext.Provider value={Themes.Cyph}>
    <ScrollProgress />
    <Layout><Cyph /></Layout>
  </ThemeContext.Provider>

export default CyphPage
