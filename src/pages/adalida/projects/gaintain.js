import React from 'react'
import 'sass/custom.scss'

import GainTain from 'components/adalida_page/projects_page/gaintain'
import Layout from 'components/adalida_page/layout'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Themes } from 'theme_context'

const GainTainPage = () =>
  <ThemeContext.Provider value={Themes.GainTain}>
    <ScrollProgress />
    <Layout><GainTain /></Layout>
  </ThemeContext.Provider>

export default GainTainPage
