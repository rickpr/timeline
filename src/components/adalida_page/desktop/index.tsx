import React, { useRef } from 'react'

import type { Theme } from 'theme_context'

import App from './app'
import Header from './header'
import { headerPixels } from '../header'

const coverStyles = {
  display: 'flex',
  maxHeight: `calc(100dvh - ${headerPixels}px)`,
  flexDirection: 'column' as const,
  overflowY: 'auto' as const,
  overflowX: 'hidden' as const,
  scrollSnapType: 'y mandatory'
}

interface Props {
  themes: Record<string, Theme>
  setCurrentTheme: (themeName: string) => void
}

const Desktop = ({ themes, setCurrentTheme }: Props): JSX.Element => {
  const containerRef = useRef(null)
  const themeTitles = Object.keys(themes)
  const appRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(themeTitles.map(title => [title, null]))
  )

  return (
    <div style={coverStyles} ref={containerRef}>
      {themeTitles.map(title => (
        <App
          key={title}
          ref={ (element: React.MutableRefObject<HTMLDivElement>) => (appRefs.current[title] = element) }
          theme={themes[title]}
          title={title}
          containerRef={containerRef}
          setCurrentTheme={setCurrentTheme}
        />
      ))}
      <Header themes={themes} appRefs={appRefs} />
    </div>
  )
}

export default Desktop
