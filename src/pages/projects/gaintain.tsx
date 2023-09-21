import React from 'react'
import 'sass/custom.scss'

import GainTain from 'components/adalida_page/projects/gaintain'
import Header from 'components/adalida_page/header'
import ScrollProgress from 'components/adalida_page/projects/scroll_progress'
import useDarkMode from 'hooks/use_dark_mode'
import { ThemeContext, Projects } from 'theme_context'

const GainTainPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...Projects.GainTain }}>
      <Header sticky={<ScrollProgress />} />
      <GainTain />
    </ThemeContext.Provider>
  )
}

export default GainTainPage
