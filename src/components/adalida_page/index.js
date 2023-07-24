import React, { useState } from 'react'

import Projects from 'project_data'
import { ThemeContext } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'
import useLocalStorage from 'hooks/use_local_storage'
import Desktop from './desktop'
import Mobile from './mobile'

import 'sass/adalida_page/index.scss'

const AdalidaPage = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode') ?? false
  const [closestProject, setClosestProject] = useState('GainTain')
  const currentProject = Projects[closestProject]

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, ...currentProject }}>
      {useIsMobile(768)
        ? <Mobile closestProject={closestProject} setClosestProject={setClosestProject} />
        : <Desktop closestProject={closestProject} setClosestProject={setClosestProject} />}
    </ThemeContext.Provider>
  )
}

export default AdalidaPage
