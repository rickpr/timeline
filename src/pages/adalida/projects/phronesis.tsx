import React from 'react'
import 'sass/custom.scss'

import Phronesis from 'components/adalida_page/projects_page/phronesis'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import useDarkMode from 'hooks/use_dark_mode'
import { ThemeContext, Projects } from 'theme_context'

const PhronesisPage = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...Projects.Phronesis }}>
      <ScrollProgress />
      <Phronesis />
    </ThemeContext.Provider>
  )
}

export default PhronesisPage
