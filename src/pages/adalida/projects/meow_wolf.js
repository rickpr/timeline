import React from 'react'
import 'sass/custom.scss'

import Layout from 'components/adalida_page/layout'
import MeowWolf from 'components/adalida_page/projects_page/meow_wolf'
import { ThemeContext, Themes } from 'theme_context'

const MeowWolfPage = () =>
  <ThemeContext.Provider value={Themes['Meow Wolf']}>
    <Layout><MeowWolf /></Layout>
  </ThemeContext.Provider>

export default MeowWolfPage
