import React from 'react'
import Typewriter from 'typewriter-effect'

import useAnimateOnScroll from '../../hooks/use_animate_on_scroll'
import RemoteTimeline from '../timeline/remote_timeline'
import WorldClock from './world_clock'

const RicardoPage = () => {
  useAnimateOnScroll()
  const primary = '#39FF14'
  return (
    <>
      <div style={{ minHeight: '20vh' }} />
      <WorldClock />
      <div style={{ minHeight: '20vh' }} />
      <div className='wide-timeline' style={{ backdropFilter: 'blur(8px)' }}>
        <div data-aos='fade-up'>
          <div style={{ width: '90%', margin: 'auto' }}>
            <h1 style={{ color: 'white' }}>
              Welcome, I am Ricardo and I am passionate about&nbsp;
              <span style={{ color: primary }}>
                <Typewriter
                  options={{
                    strings: ['software engineering', 'clean code', 'scalable systems', 'test-driven development'],
                    autoStart: true,
                    loop: true
                  }}
                />
              </span>.
            </h1>
          </div>
        </div>
      </div>
      <div style={{ minHeight: '30vh' }} />
      <RemoteTimeline timelineId='1' />
    </>
  )
}

export default RicardoPage
