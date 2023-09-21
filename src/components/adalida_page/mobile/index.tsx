import React, { useContext, useRef } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'

import Projects from 'project_data'
import { ThemeContext } from 'theme_context'

import App from './app'
import Selector from './selector'
import { headerPixels } from '../header'

const height = `calc(100dvh - ${headerPixels}px)`

const fullWindowStyles = {
  minHeight: height,
  maxHeight: height,
  minWidth: '100dvw',
  display: 'flex',
  flexDirection: 'column' as const,
  transition: 'background-color 0.5s ease-in-out'
}

const coverStyles = {
  display: 'grid',
  minWidth: '100dvw',
  gridTemplateColumns: '1fr 1fr 1fr',
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
  const { darkMode } = useContext(ThemeContext)
  const { background, text } = useDarkModeStyle(darkMode)
  const styles = { background, color: text }
  const containerRef = useRef(null)
  const projects = Object.keys(Projects)
  const projectRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(projects.map(project => [project, null]))
  )
  return (
    <div style={{ ...fullWindowStyles, ...styles }}>
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
