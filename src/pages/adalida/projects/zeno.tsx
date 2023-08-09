import React from 'react'
import 'sass/custom.scss'

import Zeno from 'components/adalida_page/projects_page/zeno'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import useLocalStorage from 'hooks/use_local_storage'
import { ThemeContext, Projects } from 'theme_context'

const ZenoPage = (): JSX.Element => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode')
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, ...Projects.Zeno }}>
      <ScrollProgress />
      <Zeno />
    </ThemeContext.Provider>
  )
}

export default ZenoPage
