import React from 'react'
import 'sass/custom.scss'

import ZarasCleaning from 'components/adalida_page/projects_page/zaras_cleaning'
import Layout from 'components/adalida_page/layout'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Themes } from 'theme_context'

const ZarasCleaningPage = () =>
  <ThemeContext.Provider value={Themes.ZarasCleaning}>
    <ScrollProgress />
    <Layout><ZarasCleaning /></Layout>
  </ThemeContext.Provider>

export default ZarasCleaningPage
