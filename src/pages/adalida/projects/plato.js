import React from 'react'
import 'sass/custom.scss'

import Plato from 'components/adalida_page/projects_page/plato'
import Layout from 'components/adalida_page/layout'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Themes } from 'theme_context'

const PlatoPage = () =>
  <ThemeContext.Provider value={Themes.Plato}>
    <ScrollProgress />
    <Layout><Plato /></Layout>
  </ThemeContext.Provider>

export default PlatoPage
