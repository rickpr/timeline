import React, { useRef } from 'react'

import Projects from 'project_data'

import App from './app'
import Header from './header'
import { headerPixels } from '../header'

const coverStyles = {
  display: 'flex',
  maxHeight: `calc(100dvh - ${headerPixels}px)`,
  flexDirection: 'column' as const,
  overflowY: 'auto' as const,
  overflowX: 'hidden' as const,
  scrollSnapType: 'y mandatory'
}

interface Props {
  setCurrentProject: (project: string) => void
}

const Desktop = ({ setCurrentProject }: Props): JSX.Element => {
  const containerRef = useRef(null)
  const projects = Object.keys(Projects)
  const projectRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(projects.map(project => [project, null]))
  )

  return (
    <div style={coverStyles} ref={containerRef}>
      {projects.map(project => (
        <App
          key={project}
          ref={ (element: React.MutableRefObject<HTMLDivElement>) => (projectRefs.current[project] = element) }
          title={project}
          containerRef={containerRef}
          setCurrentProject={setCurrentProject}
        />
      ))}
      <Header projectRefs={projectRefs} />
    </div>
  )
}

export default Desktop
