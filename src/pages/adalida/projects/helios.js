import React from 'react'
import 'sass/custom.scss'

import Header from 'components/adalida_page/header'
import Helios from 'components/adalida_page/projects_page/helios'
import Footer from 'components/adalida_page/footer'
import { ThemeContext, Themes } from 'theme_context'

const HeliosPage = () =>
  <ThemeContext.Provider value={Themes.Helios}>
    <Header />
    <Helios />
    <Footer />
  </ThemeContext.Provider>

export default HeliosPage
