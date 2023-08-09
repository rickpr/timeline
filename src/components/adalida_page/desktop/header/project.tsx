import PropTypes from 'prop-types'
import React from 'react'

import Title from './title'

const barStyle = {
  borderWidth: '0.2dvw',
  borderRadius: '0.2dvw',
  borderStyle: 'solid',
  flex: '1 0 0',
  width: '0.5dvw',
  background: 'none',
  padding: 0,
  pointerEvents: 'auto' as const,
  transition: 'all 0.5s ease',
  cursor: 'pointer'
}
const projectStyle = {
  display: 'flex',
  gap: '1dvw',
  transition: 'all 0.5s ease',
  pointerEvents: 'auto' as const,
  cursor: 'pointer'
}

interface Props {
  projectRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
  currentProject: string
  project: string
}

const Project = ({ projectRefs, currentProject, project }: Props): React.ReactElement => {
  const active = currentProject === project
  const opacity = active ? 1 : 0.2
  const borderColor = active ? 'white' : '#E7E5E7'
  const scrollIntoView = (): void => projectRefs.current[project]?.current?.scrollIntoView({ behavior: 'smooth' })
  return (
    <div
      key={project}
      style={{ opacity, ...projectStyle }}
      onClick={scrollIntoView}
      role='tab'
      tabIndex={0}
      onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && scrollIntoView() }}
    >
      <div style={{ ...barStyle, borderColor }} />
      <Title title={project} active={active} />
    </div>
  )
}

Project.propTypes = {
  projectRefs: PropTypes.object,
  currentProject: PropTypes.string,
  project: PropTypes.string
}

export default Project
