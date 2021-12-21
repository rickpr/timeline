import React from 'react'
import Typewriter from 'typewriter-effect'

import useAnimateOnScroll from '../hooks/use_animate_on_scroll'
import Crossbar from './timeline/wide_timeline/crossbar'
import RemoteTimeline from './timeline/remote_timeline'

const RicardoPage = () => {
  useAnimateOnScroll()
  return (
    <>
      <div style={{ minHeight: '20em' }} />
      <div className='wide-timeline'>
        <div className='row'>
          <div className='col-sm-5' data-aos='fade-down'>
            <div className='adalida-header'><span className='hello'>Hello</span>, I am <span className='name'>Ricardo</span></div>
          </div>
        </div>
        <div className='row' data-aos='fade-up'>
          <div className='col-sm-5 offset-sm-2'>
            Welcome, I am Ricardo and I am passionate about <Typewriter
              options={{ strings: ['software engineering', 'clean code', 'scalable systems', 'test-driven development'], autoStart: true, loop: true }}
                                                            />.
          </div>
        </div>
        <div className='row' data-aos='fade-up'>
          <div className='col-sm-5 offset-sm-2'>
            I am a Software Engineer at Unit21.
          </div>
        </div>
      </div>
      <div style={{ minHeight: '20em' }} />
      <RemoteTimeline timelineId='1' />
    </>
  )
}

export default RicardoPage
