import React from 'react'
import 'sass/custom.scss'

import Cyph from 'components/adalida_page/projects_page/cyph'
import Layout from 'components/adalida_page/layout'
import { ThemeContext, Themes } from 'theme_context'

const CyphPage = () =>
  <>
    <ThemeContext.Provider value={Themes.Cyph}>
      <Layout><Cyph /></Layout>
    </ThemeContext.Provider>
  </>

export default CyphPage
