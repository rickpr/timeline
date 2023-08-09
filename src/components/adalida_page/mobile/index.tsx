import React, { useRef } from 'react'

import App from './app'
import Header from './header'
import Projects from 'project_data'

const fullWindowStyles = {
  minHeight: '100dvh',
  maxHeight: '100dvh',
  minWidth: '100dvw',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'space-between',
  overflowY: 'hidden' as const
}

const coverStyles = {
  display: 'grid',
  minWidth: '100dvw',
  gridTemplateColumns: '1fr 1fr 1fr',
  flexDirection: 'row' as const,
  transition: 'background-color 0.5s ease-in-out',
  overflowX: 'auto' as const,
  overflowY: 'hidden' as const,
  scrollSnapType: 'both mandatory',
  flexGrow: 3,
  position: 'relative' as const,
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
