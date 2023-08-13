import React, { type CSSProperties, useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

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
  project: string
}

const Project = ({ projectRefs, project }: Props): React.ReactElement => {
  const { name, darkMode } = useContext(ThemeContext)
  const { background } = useDarkModeStyle(!darkMode)
  const active = name === project
  const opacity = active ? 1 : 0.2
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
      <div style={{ ...barStyle, borderColor: background as CSSProperties['borderColor'] }} />
      <Title title={project} active={active} />
    </div>
  )
}

export default Project
