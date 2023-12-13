import React, { useRef } from 'react'

import type { Theme } from 'theme_context'

import App from './app'
import Selector from './selector'
import { headerPixels } from '../header'

const height = `calc(100dvh - ${headerPixels}px)`

const fullWindowStyles = {
  minHeight: height,
  maxHeight: height,
  minWidth: '100dvw',
  display: 'flex',
  flexDirection: 'column' as const
}

const coverStyles = {
  display: 'grid',
  minWidth: '100dvw',
  flexDirection: 'row' as const,
  overflowX: 'auto' as const,
  overflowY: 'hidden' as const,
  scrollSnapType: 'x mandatory',
  flexGrow: 3,
  position: 'relative' as const
}

interface Props {
  themes: Record<string, Theme>
  setCurrentTheme: (title: string) => void
}

const Mobile = ({ themes, setCurrentTheme }: Props): JSX.Element => {
  const gridTemplateColumns = `repeat(${Object.keys(themes).length}, 1fr)`
  const containerRef = useRef(null)
  const themeTitles = Object.keys(themes)
  const appRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement> | null>>(
    Object.fromEntries(themeTitles.map(title => [title, null]))
  )
  return (
    <div style={fullWindowStyles}>
      <Selector themes={themes} appRefs={appRefs} />
      <div style={{ ...coverStyles, gridTemplateColumns }} ref={containerRef}>
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
      </div>
    </div>
  )
}

export default Mobile
