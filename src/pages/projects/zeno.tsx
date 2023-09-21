import React from 'react'
import 'sass/custom.scss'

import Zeno from 'components/adalida_page/projects/zeno'
import Header from 'components/adalida_page/header'
import ScrollProgress from 'components/adalida_page/projects/scroll_progress'
import useDarkMode from 'hooks/use_dark_mode'
import { ThemeContext, Projects } from 'theme_context'

const ZenoPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...Projects.Zeno }}>
      <Header sticky={<ScrollProgress />} />
      <Zeno />
    </ThemeContext.Provider>
  )
}

export default ZenoPage
