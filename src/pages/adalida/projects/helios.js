import React from 'react'
import 'sass/custom.scss'

import Layout from 'components/adalida_page/layout'
import Helios from 'components/adalida_page/projects_page/helios'
import { ThemeContext, Themes } from 'theme_context'

const HeliosPage = () =>
  <ThemeContext.Provider value={Themes.Helios}>
    <Layout><Helios /></Layout>
  </ThemeContext.Provider>

export default HeliosPage
