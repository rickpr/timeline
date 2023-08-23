import React, { useContext, useEffect, useRef } from 'react'

import { ThemeContext } from 'theme_context'

import GlobalHeader from '../../header'
import Project from './project'

const headerStyles = {
  position: 'fixed' as const,
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  zIndex: 2,
  pointerEvents: 'none' as const,
  height: '100%',
  transition: 'all 0.5s ease'
}
const indicatorStyle = {
  width: '50%',
  padding: '0 10dvw',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '2dvh',
  justifyContent: 'space-between',
  bottom: '10dvh',
  height: 'min-content',
  position: 'fixed' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(0, -50%)'
}

interface Props {
  projectRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
}

const previousAndNextProjects = ({ projectRefs, name }: Props & { name: string }): {
  previousProject: string | undefined
  nextProject: string | undefined
} => {
  const projects = Object.keys(projectRefs.current)
  const currentProjectIndex = projects.indexOf(name)
  const previousProject = projects[currentProjectIndex - 1]
  const nextProject = projects[currentProjectIndex + 1]
  return { previousProject, nextProject }
}

const Header = ({ projectRefs }: Props): React.ReactElement => {
  const { name } = useContext(ThemeContext)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const refCurrent = ref.current
    if (refCurrent == null) return

    const { previousProject, nextProject } = previousAndNextProjects({ projectRefs, name })
    const previousProjectRef = previousProject === undefined ? null : projectRefs.current[previousProject]
    const nextProjectRef = nextProject === undefined ? null : projectRefs.current[nextProject]
    const handleWheel = (event: WheelEvent): void => {
      if (event.deltaY < 0 && previousProjectRef !== null) {
        previousProjectRef.current.scrollIntoView({ behavior: 'smooth' })
      } else if (event.deltaY > 0 && nextProjectRef !== null) {
        nextProjectRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
    refCurrent.addEventListener('wheel', handleWheel)
    return () => { refCurrent.removeEventListener('wheel', handleWheel) }
  }, [ref, name, projectRefs])

  const indicators = Object.keys(projectRefs.current).map(project =>
    <Project key={project} projectRefs={projectRefs} project={project} />
  )
  return (
    <div style={headerStyles} ref={ref}>
      <GlobalHeader />
      <div style={indicatorStyle}>
        {indicators}
      </div>
    </div>
  )
}

export default Header
