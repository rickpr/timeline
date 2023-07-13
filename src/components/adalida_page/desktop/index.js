import PropTypes from 'prop-types'
import React, { useRef } from 'react'

import App from './app'
import Projects from 'project_data'

import 'sass/adalida_page/index.scss'

const coverStyles = {
  display: 'flex',
  maxHeight: '100vh',
  flexDirection: 'column',
  transition: 'background-color 0.5s ease-in-out',
  overflow: 'auto',
  scrollSnapType: 'both mandatory'
}

const Desktop = ({ closestProject, setClosestProject }) => {
  const containerRef = useRef(null)
  const projects = Object.keys(Projects)

  return (
    <div style={{ ...coverStyles }} ref={containerRef}>
      {projects.map(project => (
        <App
          key={project}
          title={project}
          containerRef={containerRef}
          closestProject={closestProject}
          setClosestProject={setClosestProject}
        />
      ))}
    </div>
  )
}

Desktop.propTypes = {
  closestProject: PropTypes.string.isRequired,
  setClosestProject: PropTypes.func.isRequired
}

export default Desktop
