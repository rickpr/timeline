import React from 'react'
import 'sass/custom.scss'

import Phronesis from 'components/adalida_page/projects_page/phronesis'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import useLocalStorage from 'hooks/use_local_storage'
import { ThemeContext, Projects } from 'theme_context'

const PhronesisPage = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode')
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, ...Projects.Phronesis }}>
      <ScrollProgress />
      <Phronesis />
    </ThemeContext.Provider>
  )
}

export default PhronesisPage
