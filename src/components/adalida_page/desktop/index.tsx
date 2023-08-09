import React, { useRef } from 'react'

import App from './app'
import Header from './header'
import Projects from 'project_data'

const coverStyles = {
  display: 'flex',
  maxHeight: '100dvh',
  flexDirection: 'column' as const,
  transition: 'background-color 0.5s ease-in-out',
  overflow: 'auto',
  scrollSnapType: 'both mandatory'
}

interface Props {
  currentProject: string
  setCurrentProject: (project: string) => void
}

const Desktop = ({ currentProject, setCurrentProject }: Props): JSX.Element => {
  const containerRef = useRef(null)
  const projects = Object.keys(Projects)
  const projectRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(projects.map(project => [project, null]))
  )

  return (
    <div style={coverStyles} ref={containerRef}>
      <Header projectRefs={projectRefs} currentProject={currentProject} />
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
  )
}

export default Desktop
