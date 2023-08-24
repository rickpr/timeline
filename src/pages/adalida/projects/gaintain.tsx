import React from 'react'
import 'sass/custom.scss'

import GainTain from 'components/adalida_page/projects_page/gaintain'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import useDarkMode from 'hooks/use_dark_mode'
import { ThemeContext, Projects } from 'theme_context'

const GainTainPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...Projects.GainTain }}>
      <ScrollProgress />
      <GainTain />
    </ThemeContext.Provider>
  )
}

export default GainTainPage
