import PropTypes from 'prop-types'
import React, { useRef } from 'react'

import App from './app'
import Header from './header'
import Projects from 'project_data'

const fullWindowStyles = {
  minHeight: '100dvh',
  minWidth: '100dvw',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'space-between'
}

const coverStyles = {
  display: 'flex',
  minWidth: '100vw',
  flexDirection: 'row' as const,
  transition: 'background-color 0.5s ease-in-out',
  overflow: 'auto',
  scrollSnapType: 'both mandatory',
  flexGrow: 3,
  position: 'relative' as const
}

interface Props {
  currentProject: string
  setCurrentProject: (project: string) => void
}

const Mobile = ({ currentProject, setCurrentProject }: Props): JSX.Element => {
  const containerRef = useRef(null)
  const projects = Object.keys(Projects)
  const projectRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(projects.map(project => [project, null]))
  )
  return (
    <div style={fullWindowStyles}>
      <Header projectRefs={projectRefs} currentProject={currentProject} />
      <div style={coverStyles} ref={containerRef}>
        {projects.map(project => (
          <App
            key={project}
            ref={ (element: React.MutableRefObject<HTMLDivElement>) => (projectRefs.current[project] = element) }
            title={project}
            containerRef={containerRef}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
          />
        ))}
      </div>
    </div>
  )
}

export default Mobile
