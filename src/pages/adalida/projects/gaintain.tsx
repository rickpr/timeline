import React from 'react'
import 'sass/custom.scss'

import GainTain from 'components/adalida_page/projects_page/gaintain'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import useLocalStorage from 'hooks/use_local_storage'
import { ThemeContext, Projects } from 'theme_context'

const GainTainPage = (): JSX.Element => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode')
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, ...Projects.GainTain }}>
      <ScrollProgress />
      <GainTain />
    </ThemeContext.Provider>
  )
}

export default GainTainPage
