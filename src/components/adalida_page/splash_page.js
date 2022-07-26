import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import Typewriter from 'typewriter-effect'

import useViewportHeight from 'hooks/use_viewport_height'

import Image from 'components/image'

import 'sass/adalida_page/index.scss'

const SplashPage = React.forwardRef(({ links, paragraphs }, ref) => {
  const backdropFilter = 'blur(8px)'
  const textAlign = 'center'
  const viewportHeight = useViewportHeight()
  const height = useMemo(() => {
    return `calc(${viewportHeight}px - 8vh)`
  }, [viewportHeight])
  const hello = (
    <div style={{ textAlign: 'center', fontSize: 'max(5vmin, 2em)', width: '100%' }}>
      <span style={{ color: '#000000' }}>Hello, I&apos;m Adalida Baca and I&apos;m a</span>
      <span style={{ color: '#3D9AF0' }}> Product Designer</span>
    </div>
  )
  const image = (
    <Image
      className='oversize-image'
      path='images/adalida_face.png'
      style={{ height: '30vmin' }}
      imgStyle={{ minHeight: '100%' }}
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
        <span style={{ color: '#3D9AF0' }}>{typewriter}</span>
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
        {links}
      </div>
    </div>
  )
})

SplashPage.displayName = 'SplashPage'
SplashPage.propTypes = {
  links: PropTypes.node,
  paragraphs: PropTypes.node
}

export default SplashPage
