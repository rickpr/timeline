import React from 'react'
import 'sass/custom.scss'

import Zeno from 'components/adalida_page/projects_page/zeno'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import useDarkMode from 'hooks/use_dark_mode'
import { ThemeContext, Projects } from 'theme_context'

const ZenoPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...Projects.Zeno }}>
      <ScrollProgress />
      <Zeno />
    </ThemeContext.Provider>
  )
}

export default ZenoPage
