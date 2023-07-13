import React, { useState } from 'react'

import Projects from 'project_data'
import { ThemeContext } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'
import Desktop from './desktop'
import Mobile from './mobile'

import 'sass/adalida_page/index.scss'

const AdalidaPage = () => {
  const [closestProject, setClosestProject] = useState('GainTain')
  const currentProject = Projects[closestProject]

  return (
    <ThemeContext.Provider value={currentProject}>
      {useIsMobile(768)
        ? <Mobile closestProject={closestProject} setClosestProject={setClosestProject} />
        : <Desktop closestProject={closestProject} setClosestProject={setClosestProject} />}
    </ThemeContext.Provider>
  )
}

export default AdalidaPage
