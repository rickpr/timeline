import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'

import Projects from 'project_data'
import Title from './title'

gsap.registerPlugin(ScrollTrigger)

const imageStyles = {
  borderRadius: '1em',
  width: '100%'
}

const imageContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  aspectRatio: '1 / 1'
}

const coverStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  height: '100dvh',
  width: '100dvw',
  minHeight: '100dvh',
  minWidth: '100dvw',
  padding: '0 10dvw'
}

const App = ({ title, containerRef, closestProject, setClosestProject }) => {
  const { coverPhoto, colors: { background } } = Projects[title]
  const isClosestProject = closestProject === title
  const imageRef = useRef()
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
    opacity: isClosestProject ? 1 : 0
  }), [isClosestProject, background])

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          scroller: containerRef.current,
          onUpdate: self => { if (self.progress === 0.5) setClosestProject(title) }
        }
      })
        .from(imageRef.current, { scale: 0.5 })
        .to(imageRef.current, { scale: 1 })
        .to(imageRef.current, { scale: 0.5 })
    })
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      context.revert()
    }
  }, [containerRef, setClosestProject, title])

  const fullWidthBackground = <div style={backgroundStyles} />

  return (
    <>
      {fullWidthBackground}
      <div style={coverStyles} className='mobile-app'>
        <div style={{ minHeight: '8em' }} />
        <div style={imageContainerStyles} ref={imageRef}>
          <img alt={`${title} cover`} src={coverPhoto} style={imageStyles} />
        </div>
        <Title title={title} />
      </div>
    </>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  containerRef: PropTypes.shape({ current: PropTypes.node.isRequired }).isRequired,
  closestProject: PropTypes.string.isRequired,
  setClosestProject: PropTypes.func.isRequired
}

export default App
