import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { forwardRef, useEffect, useRef } from 'react'

import type { Theme } from 'theme_context'

import { headerPixels } from '../header'

gsap.registerPlugin(ScrollTrigger)

const height = `calc(100dvh - ${headerPixels}px)`
const halfHeight = `calc(${height} / 2)`
const imageStyles = {
  borderRadius: '1em',
  objectFit: 'contain' as const,
  width: '100%',
  height: '100%',
  maxHeight: halfHeight
}

const imageContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  maxHeight: halfHeight,
  padding: '0 15px',
  margin: 'auto 0'
}

const coverStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
  position: 'relative' as const,
  overflow: 'hidden',
  scrollSnapAlign: 'center',
  scrollSnapStop: 'always' as const,
  height,
  width: '100dvw',
  minHeight: height,
  minWidth: '100dvw'
}

interface Props {
  title: string
  theme: Theme
  containerRef: React.MutableRefObject<null>
  setCurrentTheme: (themeName: string) => void
}

const App = forwardRef(({ title, theme, containerRef, setCurrentTheme }: Props, outerRef) => {
  const { coverPhoto } = theme
  const imageRef = useRef(null)
  const appRef = useRef(null)
  if (typeof outerRef === 'function') {
    outerRef(appRef)
  } else {
    console.error(`Desktop: outerRef is not a function: ${typeof outerRef}`)
  }

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: appRef.current,
          scrub: true,
          scroller: containerRef.current,
          onUpdate: self => { if (Math.abs(self.progress - 0.5) < 0.05) setCurrentTheme(title) }
        }
      })
        .from(imageRef.current, { scale: 0.5 })
        .to(imageRef.current, { scale: 1 })
        .to(imageRef.current, { scale: 0.5 })
    })
    return () => {
      ScrollTrigger.getAll().forEach(t => { t.kill() })
      context.revert()
    }
  }, [containerRef, setCurrentTheme, title])

  return (
    <div style={coverStyles} ref={appRef}>
      <div style={imageContainerStyles} ref={imageRef}>
        <img alt={`${title} cover`} src={coverPhoto} style={imageStyles} />
      </div>
    </div>
  )
})

App.displayName = 'App'

export default App
