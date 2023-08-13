import React, { useState } from 'react'

import Projects from 'project_data'
import { ThemeContext } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'
import useLocalStorage from 'hooks/use_local_storage'
import Desktop from './desktop'
import Mobile from './mobile'

import 'sass/adalida_page/index.scss'

const AdalidaPage = (): JSX.Element => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode') ?? false
  const [currentProject, setCurrentProject] = useState('Phronesis')
  const isMobile = useIsMobile(768)
  if (isMobile === null) return <div />

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, ...Projects[currentProject] }}>
      {isMobile
        ? <Mobile setCurrentProject={setCurrentProject} />
        : <Desktop setCurrentProject={setCurrentProject} />}
    </ThemeContext.Provider>
  )
}

export default AdalidaPage
