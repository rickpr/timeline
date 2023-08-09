import React from 'react'

import GlobalHeader from '../header'

const headerStyles = {
  flexGrow: 0,
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100dvw',
  justifyContent: 'space-between',
  zIndex: 2
}
const indicatorStyle = {
  width: '100%',
  display: 'flex',
  gap: '2dvw',
  padding: '0 7.5dvw',
  justifyContent: 'space-around'
}
const barStyle = {
  borderWidth: '1dvw',
  borderRadius: '1dvw',
  height: '1dvw',
  borderStyle: 'solid',
  flex: '1 0 0',
  transition: 'all 0.5s ease',
  background: 'none',
  padding: 0,
  cursor: 'pointer'
}

interface Props {
  projectRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
  currentProject: string
}

const Header = ({ projectRefs, currentProject }: Props): JSX.Element => {
  const indicators = Object.keys(projectRefs.current).map(project => {
    const active = currentProject === project
    const opacity = active ? 1 : 0.5
    const borderColor = active ? 'white' : '#E7E5E7'
    return (
      <button
        key={project}
        style={{ ...barStyle, opacity, borderColor }}
        onClick={() => projectRefs.current[project]?.current?.scrollIntoView({ behavior: 'smooth' }) }
      />
    )
  })
  return (
    <div style={headerStyles}>
      <GlobalHeader showDarkModeButton={false} />
      <div style={indicatorStyle}>{indicators}</div>
    </div>
  )
}

export default Header
