import React from 'react'
import 'sass/custom.scss'

import Cyph from 'components/adalida_page/projects_page/cyph/cyph'
import Footer from 'components/adalida_page/footer'
import Header from 'components/adalida_page/header'
import { ThemeContext, Themes } from 'theme_context'

const CyphPage = () =>
  <>
    <ThemeContext.Provider value={Themes.Cyph}>
      <Header />
      <Cyph />
      <Footer />
    </ThemeContext.Provider>
  </>

export default CyphPage
