import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
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
  scrollSnapAlign: 'center',
  scrollSnapStop: 'always',
  height: '100dvh',
  width: '80dvw',
  minHeight: '100dvh',
  minWidth: '80dvw',
  padding: '0 10dvw'
}

const Mobile = ({ title, containerRef, setClosestProject }) => {
  const { coverPhoto } = Projects[title]
  const imageRef = useRef()

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          horizontal: true,
          scrub: true,
          scroller: containerRef.current,
          onUpdate: self => { console.log(self.progress); if (self.progress === 0.5) setClosestProject(title) }
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

  return (
    <div style={coverStyles} className='mobile-app'>
      <div style={{ minHeight: '8em' }} />
      <div style={imageContainerStyles} ref={imageRef}>
        <img alt={`${title} cover`} src={coverPhoto} style={imageStyles} />
      </div>
      <Title title={title} />
    </div>
  )
}

Mobile.propTypes = {
  title: PropTypes.string.isRequired,
  containerRef: PropTypes.shape({ current: PropTypes.node.isRequired }).isRequired,
  setClosestProject: PropTypes.func.isRequired
}

export default Mobile
