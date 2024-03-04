import React, { useRef } from 'react'

import type { Theme } from 'theme_context'

import App from './app'
import Header from './header'
import { headerPixels } from '../header'

const height = `calc(100dvh - ${headerPixels * 2}px)`

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
    <div className='apps-container' style={{ maxHeight: height }} ref={containerRef}>
      <div className='glass' style={{ position: 'absolute', minHeight: height, minWidth: '85dvw' }} />
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
