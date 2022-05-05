import React from 'react'
import Typewriter from 'typewriter-effect'

import Image from 'components/image'
import useViewportHeight from 'hooks/use_viewport_height'

import 'sass/adalida_page/index.scss'

const SplashPage = React.forwardRef((props, ref) =>
  <div className='about-container' style={{ minHeight: `${useViewportHeight()}px` }} ref={ref}>
    <div style={{ textAlign: 'center', fontSize: '10vmin', width: '100%' }}>
      <span style={{ color: '#60F11C' }}>Hello</span>
      <span style={{ color: '#FFFFFF' }}>, I&apos;m</span>
      <span style={{ color: '#FF2079' }}> Adalida Baca</span>
    </div>
    <Image path='images/adalida_face.jpg' style={{ height: '30vmin' }} />
    <div style={{ color: 'white', width: '80%', textAlign: 'center' }}>
      <p>
        Welcome to my portfolio! I&apos;m passionate about&nbsp;
        <span style={{ color: '#FF2079' }}>
          {<Typewriter
            options={{
              strings: ['product design.', 'interaction design.', 'user research.'],
              autoStart: true,
              loop: true
            }}
          />}
        </span>
      </p>
    </div>
  </div>
)

SplashPage.displayName = 'SplashPage'

export default SplashPage
