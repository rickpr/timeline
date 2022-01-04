import React from 'react'
import 'sass/custom.scss'

import Header from 'components/adalida_page/projects_page/header'
import Cyph from 'components/adalida_page/projects_page/cyph'
import { ThemeContext, Themes } from 'theme_context'

const CyphPage = () =>
  <>
  <ThemeContext.Provider value={Themes['Civic App']}>
    <Header />
    <Cyph />
  </ThemeContext.Provider>
  </>

export default CyphPage
