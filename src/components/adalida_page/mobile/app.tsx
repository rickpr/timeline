import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { forwardRef, useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'

import Projects from 'project_data'
import ProjectLink from '../project_link'

gsap.registerPlugin(ScrollTrigger)

const imageHeight = 85
const translationAmount = 75 - imageHeight / 2

const containerStyles = {
  scrollBehavior: 'smooth',
  scrollSnapAlign: 'center',
  scrollSnapStop: 'always',
  WebkitOverflowScrolling: 'touch',
  width: '100dvw',
  minWidth: '100dvw',
  display: 'grid',
  placeContent: 'center',
  placeItems: 'center',
  alignSelf: 'center',
  gridTemplateRows: `${imageHeight}dvw 1fr`
}

const imageStyles = {
  borderRadius: '1em',
  width: '100%'
}

const imageContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  aspectRatio: '1 / 1',
  height: `${imageHeight}dvw`,
  width: `${imageHeight}dvw`
}

const titleStyles = {
  width: '90%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex'
}

const App = forwardRef(({ title, containerRef, currentProject, setCurrentProject }, outerRef) => {
  const { coverPhoto, colors: { background } } = Projects[title]
  const isCurrentProject = currentProject === title
  const imageRef = useRef()
  const projectRef = useRef()
  outerRef(projectRef)
  const backgroundStyles = useMemo(() => ({
    background,
    transition: 'opacity 0.5s ease-in-out',
    position: 'fixed',
    pointerEvents: 'none',
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

App.propTypes = {
  title: PropTypes.string.isRequired,
  containerRef: PropTypes.shape({ current: PropTypes.node.isRequired }).isRequired,
  currentProject: PropTypes.string.isRequired,
  setCurrentProject: PropTypes.func.isRequired
}

export default App
