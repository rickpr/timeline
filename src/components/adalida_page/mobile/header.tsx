import React, { useContext, type CSSProperties } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'

import { ThemeContext } from 'theme_context'

const headerStyles = {
  position: 'sticky' as const,
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
  gap: '2dvh',
  padding: '7.5dvw',
  justifyContent: 'space-around'
}
const barStyle = {
  borderWidth: '4px',
  borderRadius: '4px',
  height: '4px',
  borderStyle: 'solid',
  flex: '1 0 0',
  transition: 'all 0.5s ease',
  background: 'none',
  padding: 0,
  cursor: 'pointer'
}

interface Props {
  projectRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
}

const Header = ({ projectRefs }: Props): JSX.Element => {
  const { name, darkMode } = useContext(ThemeContext)
  const { text } = useDarkModeStyle(darkMode)

  const indicators = Object.keys(projectRefs.current).map(project => {
    const active = name === project
    const opacity = active ? 1 : 0.2
    return (
      <button
        key={project}
        style={{ ...barStyle, opacity, borderColor: text as CSSProperties['borderColor'] }}
        onClick={() => projectRefs.current[project]?.current?.scrollIntoView({ behavior: 'smooth' }) }
      />
    )
  })
  return (
    <div style={{ ...headerStyles, color: text }}>
      <div style={indicatorStyle}>{indicators}</div>
    </div>
  )
}

export default Header
