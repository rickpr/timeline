import React, { useRef, useState } from 'react'

import App from './app'
import Header from './header'
import Projects from 'project_data'
import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/index.scss'

const coverStyles = {
  display: 'flex',
  maxHeight: '100vh',
  flexDirection: 'row',
  transition: 'background-color 0.5s ease-in-out',
  overflow: 'auto',
  scrollSnapType: 'both mandatory'
}

const AdalidaPage = () => {
  const containerRef = useRef(null)
  const projects = Object.keys(Projects)
  const [closestProject, setClosestProject] = useState('GainTain')
  const currentProject = Projects[closestProject]

  return (
    <ThemeContext.Provider value={currentProject}>
      <Header closestProject={closestProject} />
      <div style={{ background: currentProject.colors.background, ...coverStyles }} ref={containerRef} id='apps-container'>
        {projects.map(project => (
          <App
            key={project}
            title={project}
            containerRef={containerRef}
            setClosestProject={setClosestProject}
          />
        ))}
      </div>
    </ThemeContext.Provider>
  )
}

export default AdalidaPage
