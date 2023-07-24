import PropTypes from 'prop-types'
import React, { useRef } from 'react'

import App from './app'
import Header from './header'
import Projects from 'project_data'

const coverStyles = {
  display: 'flex',
  minWidth: '100vw',
  maxHeight: '100vh',
  flexDirection: 'row',
  transition: 'background-color 0.5s ease-in-out',
  overflow: 'auto',
  scrollSnapType: 'both mandatory'
}

const Mobile = ({ closestProject, setClosestProject }) => {
  const containerRef = useRef(null)
  const projects = Object.keys(Projects)
  const projectRefs = useRef(Object.fromEntries(projects.map(project => [project, null])))

  return (
    <>
      <Header projectRefs={projectRefs} closestProject={closestProject} />
      <div style={coverStyles} ref={containerRef}>
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
    </>
  )
}

Mobile.propTypes = {
  closestProject: PropTypes.string.isRequired,
  setClosestProject: PropTypes.func.isRequired
}

export default Mobile
