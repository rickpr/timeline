import React, { useContext, useRef } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'

import App from './app'
import Header from './header'
import Projects from 'project_data'

import { ThemeContext } from 'theme_context'

const coverStyles = {
  display: 'flex',
  maxHeight: '100dvh',
  flexDirection: 'column' as const,
  transition: 'background-color 0.5s',
  overflowY: 'auto' as const,
  overflowX: 'hidden' as const,
  scrollSnapType: 'y mandatory',
  background: '#121212'
}

interface Props {
  setCurrentProject: (project: string) => void
}

const Desktop = ({ setCurrentProject }: Props): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { background, text } = useDarkModeStyle(darkMode)
  const styles = { background, color: text }
  const containerRef = useRef(null)
  const projects = Object.keys(Projects)
  const projectRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(projects.map(project => [project, null]))
  )

  return (
    <div style={{ ...coverStyles, ...styles }} ref={containerRef}>
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
