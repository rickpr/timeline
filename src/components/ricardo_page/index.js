import React from 'react'
import Typewriter from 'typewriter-effect'

import useAnimateOnScroll from '../../hooks/use_animate_on_scroll'
import WorldClock from './world_clock'

const RicardoPage = () => {
  useAnimateOnScroll()
  const primary = '#39FF14'
  const strings = ['software engineering', 'clean code', 'scalable systems', 'test-driven development']
  const longestString = Math.max(...strings.map(string => string.length))
  return (
    <>
      <div style={{ minHeight: '20vh' }} />
      <WorldClock />
      <div style={{ minHeight: '20vh' }} />
      <div style={{ backdropFilter: 'blur(8px)', mixBlendMode: 'difference' }}>
        <div data-aos='fade-up'>
          <div style={{ width: '90%', margin: 'auto' }}>
            <h1 style={{ color: 'white' }}>
              Welcome, I am Ricardo and I am passionate about&nbsp;
              <span style={{ color: primary, display: 'inline-block', minWidth: `${longestString}ch` }}>
                <Typewriter options={{ autoStart: true, loop: true, strings }} />
                <span style={{ color: 'white' }}>.</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default RicardoPage
