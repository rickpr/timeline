import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { forwardRef, useEffect, useRef } from 'react'

import CaseStudyThemes from 'case_study_themes'

import { headerPixels } from '../header'

gsap.registerPlugin(ScrollTrigger)

const imageStyles = {
  borderRadius: '1em',
  width: '100%'
}

const height = `calc(100dvh - ${headerPixels}px)`

const imageContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  aspectRatio: '1 / 1',
  padding: '0 15px'
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
  minWidth: '100dvw',
  padding: '0 10dvw'
}

interface Props {
  title: string
  containerRef: React.MutableRefObject<null>
  setCurrentCaseStudy: (caseStudy: string) => void
}

const App = forwardRef(({ title, containerRef, setCurrentCaseStudy }: Props, outerRef) => {
  const { coverPhoto } = CaseStudyThemes[title]
  const imageRef = useRef(null)
  const caseStudyRef = useRef(null)
  if (typeof outerRef === 'function') {
    outerRef(caseStudyRef)
  } else {
    console.error(`Desktop: outerRef is not a function: ${typeof outerRef}`)
  }

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: caseStudyRef.current,
          scrub: true,
          scroller: containerRef.current,
          onUpdate: self => { if (Math.abs(self.progress - 0.5) < 0.05) setCurrentCaseStudy(title) }
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
  }, [containerRef, setCurrentCaseStudy, title])

  return (
    <div style={coverStyles} ref={caseStudyRef}>
      <div style={imageContainerStyles} ref={imageRef}>
        <img alt={`${title} cover`} src={coverPhoto} style={imageStyles} />
      </div>
    </div>
  )
})

App.displayName = 'App'

export default App
