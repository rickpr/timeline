import React from 'react'
import 'sass/custom.scss'

import Header from 'components/adalida_page/header'
import MeowWolf from 'components/adalida_page/projects_page/meow_wolf'
import Footer from 'components/adalida_page/projects_page/footer'
import { ThemeContext, Themes } from 'theme_context'

const MeowWolfPage = () =>
  <ThemeContext.Provider value={Themes['Meow Wolf']}>
    <Header />
    <MeowWolf />
    <Footer />
  </ThemeContext.Provider>

export default MeowWolfPage
