import React, { useRef } from 'react'

import Projects from 'project_data'

import App from './app'
import Selector from './selector'
import { headerPixels } from '../header'

const height = `calc(100dvh - ${headerPixels}px)`

const fullWindowStyles = {
  minHeight: height,
  maxHeight: height,
  minWidth: '100dvw',
  display: 'flex',
  flexDirection: 'column' as const
}

const coverStyles = {
  display: 'grid',
  minWidth: '100dvw',
  gridTemplateColumns: '1fr 1fr 1fr 1fr', // TODO: WTF
  flexDirection: 'row' as const,
  overflowX: 'auto' as const,
  overflowY: 'hidden' as const,
  scrollSnapType: 'x mandatory',
  flexGrow: 3,
  position: 'relative' as const
}

interface Props {
  setCurrentProject: (project: string) => void
}

const Mobile = ({ setCurrentProject }: Props): JSX.Element => {
  const containerRef = useRef(null)
  const projects = Object.keys(Projects)
  const projectRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(projects.map(project => [project, null]))
  )
  return (
    <div style={fullWindowStyles}>
      <Selector projectRefs={projectRefs} />
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
      </div>
    </div>
  )
}

export default Mobile
