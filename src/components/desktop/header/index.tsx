import React from 'react'

import type { Theme } from 'theme_context'
import Info from './info'

const indicatorStyle = {
  width: '50%',
  padding: '0 10dvw 0 0',
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
  themes: Record<string, Theme>
  appRefs: React.MutableRefObject<Record<string, React.MutableRefObject<HTMLDivElement> | null>>
}

const Header = ({ themes, appRefs }: Props): React.ReactElement => {
  const indicators = Object.keys(appRefs.current).map(title =>
    <Info key={title} appRefs={appRefs} theme={themes[title]} title={title} />
  )
  return <div style={indicatorStyle}>{indicators}</div>
}

export default Header
