import React from 'react'

import Project from './project'

const indicatorStyle = {
  width: '50%',
  padding: '0 10dvw',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '2dvh',
  justifyContent: 'space-between',
  bottom: '10dvh',
  height: 'min-content',
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(0, -50%)',
  pointerEvents: 'none' as const
}

interface Props {
  projectRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
}

const Header = ({ projectRefs }: Props): React.ReactElement => {
  const indicators = Object.keys(projectRefs.current).map(project =>
    <Project key={project} projectRefs={projectRefs} project={project} />
  )
  return <div style={indicatorStyle}>{indicators}</div>
}

export default Header
