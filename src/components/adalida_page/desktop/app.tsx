import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { forwardRef, useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'

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
  justifyContent: 'flex-end',
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
  currentProject: string
  setCurrentProject: (project: string) => void
}


const App = forwardRef(({ title, containerRef, currentProject, setCurrentProject }: Props, outerRef) => {
  const { coverPhoto, colors: { background } } = Projects[title]
  const isCurrentProject = currentProject === title
  const imageRef = useRef(null)
  const projectRef = useRef(null)
  outerRef(projectRef)
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

  const fullWidthBackground = <div style={backgroundStyles} />

  return (
    <>
      {fullWidthBackground}
      <div style={coverStyles} ref={projectRef}>
        <div style={imageContainerStyles} ref={imageRef}>
          <img alt={`${title} cover`} src={coverPhoto} style={imageStyles} />
        </div>
      </div>
    </>
  )
})

App.displayName = 'App'

App.propTypes = {
  title: PropTypes.string.isRequired,
  containerRef: PropTypes.shape({ current: PropTypes.node.isRequired }).isRequired,
  currentProject: PropTypes.string.isRequired,
  setCurrentProject: PropTypes.func.isRequired
}

export default App
