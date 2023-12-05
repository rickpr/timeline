import React, { type CSSProperties, useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext, type Theme } from 'theme_context'

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
  transition: 'all 0.5s ease-in-out',
  cursor: 'pointer'
}
const infoStyle = {
  display: 'flex',
  gap: '1dvw',
  pointerEvents: 'auto' as const,
  cursor: 'pointer'
}

interface Props {
  appRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
  theme: Theme
  title: string
}

const Info = ({ appRefs, theme, title }: Props): React.ReactElement => {
  const { name, darkMode } = useContext(ThemeContext)
  const { background } = useDarkModeStyle(!darkMode)
  const active = name === theme.name
  const opacity = active ? 1 : 0.2
  const scrollIntoView = (): void => appRefs.current[title]?.current?.scrollIntoView({ behavior: 'smooth' })
  return (
    <div
      key={title}
      style={{ opacity, ...infoStyle }}
      onClick={scrollIntoView}
      role='tab'
      tabIndex={0}
      onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && scrollIntoView() }}
    >
      <div style={{ ...barStyle, borderColor: background as CSSProperties['borderColor'] }} />
      <Title theme={theme} active={active} />
    </div>
  )
}

export default Info
