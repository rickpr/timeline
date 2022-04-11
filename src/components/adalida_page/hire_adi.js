import React from 'react'
import Typewriter from 'typewriter-effect'

import Image from 'components/image'

import useViewportHeight from 'hooks/use_viewport_height'

import 'sass/adalida_page/index.scss'

const HireAdi = React.forwardRef((props, ref) => {
  const styles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    placeItems: 'center',
    alignContent: 'space-around',
    minHeight: `${useViewportHeight()}px`,
    minWidth: '100vw',
    overflowY: 'scroll',
    padding: '10vh 0',
    scrollSnapAlign: 'start'
  }
  return (
    <div className='dark' style={styles} ref={ref}>
      <div style={{ textAlign: 'center', fontSize: '10vmin', width: '100%' }}>
        <span style={{ color: '#60F11C' }}>Hello</span>
        <span style={{ color: '#FFFFFF' }}>, I&apos;m</span>
        <span style={{ color: '#FF2079' }}> Adalida Baca</span>
      </div>
      <Image path='images/adalida_face.jpg' style={{ height: '30vmin' }} />
      <div style={{ color: 'white' }}>
        Welcome to my portfolio! I&apos;m passionate about&nbsp;
        <span style={{ color: '#FF2079' }}>
          {<Typewriter
             options={{
               strings: ['interaction design', 'interaction design'],
               autoStart: true,
               loop: true
             }}
           />}
        </span>
      </div>
    </div>
  )
})

HireAdi.displayName = 'HireAdi'

export default HireAdi
