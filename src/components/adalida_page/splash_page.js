import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import Typewriter from 'typewriter-effect'

import useViewportHeight from 'hooks/use_viewport_height'

import Image from 'components/image'

import 'sass/adalida_page/index.scss'

const SplashPage = React.forwardRef(({ button, paragraphs }, ref) => {
  const backdropFilter = 'blur(8px)'
  const textAlign = 'center'
  const viewportHeight = useViewportHeight()
  const height = useMemo(() => {
    return `calc(${viewportHeight}px - 8vh)`
  }, [viewportHeight])
  const hello = (
    <div style={{ textAlign: 'center', fontSize: '10vmin', width: '100%' }}>
      <span style={{ color: '#000000' }}>Hello, I&apos;m</span>
      <span style={{ color: '#872234' }}> Adalida Baca</span>
    </div>
  )
  const borderRadius = '10vmin 1vmin 10vmin 1vmin'
  const image = (
    <Image
      path='images/adalida_face.jpg'
      style={{ height: '30vmin' }}
      imgStyle={{ borderRadius, margin: 'auto', maxHeight: '100%', width: 'auto' }}
    />
  )
  const typewriter = (
    <Typewriter
      options={{
        strings: ['product design.', 'interaction design.', 'user research.'],
        autoStart: true,
        loop: true
      }}
    />
  )
  const welcome = (
    <div style={{ textAlign, backdropFilter }}>
      <p>
        Welcome to my portfolio! I&apos;m passionate about&nbsp;
        <span style={{ color: '#872234' }}>{typewriter}</span>
      </p>
      {paragraphs}
    </div>
  )
  return (
    <div style={{ height }}>
      <div className='about-container' ref={ref}>
        {hello}
        {image}
        {welcome}
        {button}
      </div>
    </div>
  )
})

SplashPage.displayName = 'SplashPage'
SplashPage.propTypes = {
  button: PropTypes.node,
  paragraphs: PropTypes.node
}

export default SplashPage
