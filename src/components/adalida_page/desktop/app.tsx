import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { forwardRef, useEffect, useRef } from 'react'

import Projects from 'project_data'

gsap.registerPlugin(ScrollTrigger)

const imageStyles = {
  borderRadius: '1em',
  width: '100%'
}

const imageContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  aspectRatio: '1 / 1'
}

const coverStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
  position: 'relative' as const,
  overflow: 'hidden',
  scrollSnapAlign: 'center',
  scrollSnapStop: 'always' as const,
  height: '100dvh',
  width: '100dvw',
  minHeight: '100dvh',
  minWidth: '100dvw',
  padding: '0 10dvw'
}

interface Props {
  title: string
  containerRef: React.MutableRefObject<null>
  setCurrentProject: (project: string) => void
}

const App = forwardRef(({ title, containerRef, setCurrentProject }: Props, outerRef) => {
  const { coverPhoto } = Projects[title]
  const imageRef = useRef(null)
  const projectRef = useRef(null)
  if (typeof outerRef === 'function') {
    outerRef(projectRef)
  } else {
    console.error(`Desktop: outerRef is not a function: ${typeof outerRef}`)
  }

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: projectRef.current,
          scrub: true,
          scroller: containerRef.current,
          onUpdate: self => { if (Math.abs(self.progress - 0.5) < 0.05) setCurrentProject(title) }
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
  }, [containerRef, setCurrentProject, title])

  return (
    <div style={coverStyles} ref={projectRef}>
      <div style={imageContainerStyles} ref={imageRef}>
        <img alt={`${title} cover`} src={coverPhoto} style={imageStyles} />
      </div>
    </div>
  )
})

App.displayName = 'App'

export default App
