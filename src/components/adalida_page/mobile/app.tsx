import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { forwardRef, useEffect, useRef } from 'react'

import Projects from 'project_data'

import ProjectLink from '../project_link'
import { headerPixels } from '../header'

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
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  padding: '0 7.5dvw',
  maxHeight: `calc(100dvh - ${headerPixels + 42}px)` // selector is 42px
}

const imageStyles = {
  borderRadius: '1em',
  objectFit: 'contain' as const,
  minHeight: 0,
  width: 'max-content',
  maxWidth: '100%'
}

const titleStyles = {
  width: '85dvw',
  height: 'max-content',
  paddingTop: '15px'
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
    console.error(`Mobile: outerRef is not a function: ${typeof outerRef}`)
  }

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

  return (
    <div style={containerStyles} ref={projectRef}>
      <img alt={`${title} cover`} src={coverPhoto} style={imageStyles} ref={imageRef} />
      <div style={titleStyles}>
        <ProjectLink title={title} />
      </div>
    </div>
  )
})

App.displayName = 'App'

export default App
