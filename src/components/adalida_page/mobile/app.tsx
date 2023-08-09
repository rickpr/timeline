import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { forwardRef, useEffect, useMemo, useRef } from 'react'

import Projects from 'project_data'
import ProjectLink from '../project_link'

gsap.registerPlugin(ScrollTrigger)

const imageHeight = 85
const translationAmount = 75 - imageHeight / 2

const containerStyles = {
  scrollBehavior: 'smooth' as const,
  scrollSnapAlign: 'center',
  scrollSnapStop: 'always' as const,
  WebkitOverflowScrolling: 'touch' as const,
  width: '100dvw',
  minWidth: '100dvw',
  display: 'grid',
  placeItems: 'center',
  placeContent: 'space-around center',
  height: '100%',
  gridTemplateRows: `${imageHeight}dvw 1fr`,
  padding: '7.5dvw 0'
}

const imageStyles = {
  borderRadius: '1em',
  width: '100%'
}

const imageContainerStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center',
  aspectRatio: '1 / 1',
  height: `${imageHeight}dvw`,
  width: `${imageHeight}dvw`
}

const titleStyles = {
  width: '85dvw',
  height: '100%'
}

interface Props {
  title: string
  containerRef: React.MutableRefObject<null>
  currentProject: string
  setCurrentProject: (project: string) => void
}

const App = forwardRef(({ title, containerRef, currentProject, setCurrentProject }: Props, outerRef) => {
  const { coverPhoto, colors: { background } } = Projects[title]
  const isCurrentProject = currentProject === title
  const imageRef = useRef(null)
  const projectRef = useRef(null)
  if (typeof outerRef === 'function') {
    outerRef(projectRef)
  } else {
    console.error(`Mobile: outerRef is not a function: ${typeof outerRef}`)
  }

  const backgroundStyles = useMemo(() => ({
    background,
    transition: 'opacity 0.5s ease-in-out',
    position: 'fixed' as const,
    pointerEvents: 'none' as const,
    left: 0,
    top: 0,
    zIndex: -1,
    width: '100vw',
    height: '100vh',
    opacity: isCurrentProject ? 1 : 0
  }), [isCurrentProject, background])

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: projectRef.current,
          scroller: containerRef.current,
          scrub: true,
          horizontal: true,
          onUpdate: self => {
            if (Math.abs(self.progress - 0.5) < 0.05) setCurrentProject(title)
          }
        }
      })
        .from(imageRef.current,
          { scale: 0.5, opacity: 0.5, transform: `translateX(-${translationAmount}dvw)` }
        )
        .to(imageRef.current,
          { scale: 1, opacity: 1, transform: 'translateX(0)' }
        )
        .to(imageRef.current,
          { scale: 0.5, opacity: 0.5, transform: `translateX(${translationAmount}dvw)` }
        )
    })
    return () => {
      ScrollTrigger.getAll().forEach(t => { t.kill() })
      context.revert()
    }
  }, [containerRef, projectRef, setCurrentProject, title])

  const fullWidthBackground = <div style={backgroundStyles} />

  return (
    <>
      {fullWidthBackground}
      <div style={containerStyles} ref={projectRef}>
        <div style={imageContainerStyles} ref={imageRef}>
          <img alt={`${title} cover`} src={coverPhoto} style={imageStyles} />
        </div>
        <div style={titleStyles}>
          <ProjectLink title={title} />
        </div>
      </div>
    </>
  )
})

App.displayName = 'App'

export default App
