import PropTypes from 'prop-types'
import React, { useRef } from 'react'

import App from './app'
import Header from './header'
import Projects from 'project_data'

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
  const projectRefs = useRef(Object.fromEntries(projects.map(project => [project, null])))

  return (
    <div style={{ ...coverStyles }} ref={containerRef}>
      <Header projectRefs={projectRefs} closestProject={closestProject} />
      {projects.map(project => (
        <App
          key={project}
          ref={ element => (projectRefs.current[project] = element) }
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
