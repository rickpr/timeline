import React, { useContext, type CSSProperties } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'

import { ThemeContext } from 'theme_context'
import { Projects } from 'project_data'

const selectorStyles = {
  position: 'sticky' as const,
  flexGrow: 0,
  display: 'flex',
  width: '100dvw',
  zIndex: 2,
  gap: '2dvh',
  padding: '10px calc(7.5dvw + 40px) 30px',
  justifyContent: 'space-around'
}
const barStyle = {
  borderWidth: '2px',
  borderRadius: '2px',
  height: '2px',
  borderStyle: 'solid',
  flex: '1 0 0',
  transition: 'all 0.5s ease-in-out',
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
    const active = name === Projects[project].name
    const opacity = active ? 1 : 0.2
    return (
      <button
        key={project}
        style={{ ...barStyle, opacity, borderColor: text as CSSProperties['borderColor'] }}
        onClick={() => projectRefs.current[project]?.current?.scrollIntoView({ behavior: 'smooth' }) }
      />
    )
  })
  return <div style={{ ...selectorStyles, color: text }}>{indicators}</div>
}

export default Header
