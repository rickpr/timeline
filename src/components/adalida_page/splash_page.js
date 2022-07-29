import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import Typewriter from 'typewriter-effect'

import useViewportHeight from 'hooks/use_viewport_height'

import Image from 'components/image'
import Links from './about_page/links'

import 'sass/adalida_page/index.scss'

const SplashPage = React.forwardRef(({ showDetail }, ref) => {
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
      path='images/adalida_face.jpg'
      style={{ height: '30vmin' }}
      imgStyle={{ borderRadius: '50%', margin: 'auto', maxHeight: '100%', width: 'auto' }}
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

  const detailParagraphs =
    <>
      <p>
        I&apos;m an enthusastic and outgoing person who enjoys problem solving and
        desigining simple and elegant solutions.
      </p>
      <p>
        Please reach out if you’d like to have a cup of coffee and design a solution
        together.
      </p>
    </>
  const welcome = (
    <div style={{ textAlign, backdropFilter }}>
      <p>
        Welcome to my portfolio! I&apos;m passionate about&nbsp;
        <span style={{ color: '#3D9AF0' }}>{typewriter}</span>
      </p>
      {showDetail && detailParagraphs}
    </div>
  )
  return (
    <div style={{ height }}>
      <div className='about-container' ref={ref}>
        {hello}
        <div style={{ minHeight: '30vmin' }}>
          {image}
        </div>
        {welcome}
        {showDetail && <Links />}
      </div>
    </div>
  )
})

SplashPage.displayName = 'SplashPage'
SplashPage.propTypes = { showDetail: PropTypes.bool }

export default SplashPage
