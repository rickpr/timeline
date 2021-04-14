import React, { useEffect } from 'react'
import AOS from 'aos'
import Typewriter from 'typewriter-effect';

import Crossbar from './timeline/alternating_timeline/crossbar'
import Timeline from './timeline'

const RicardoPage = () => {
  useEffect(() => { AOS.init({ easing: 'ease-out-back', duration: 1000, offset: 440 }) }, [])
  return (<>
    <div style={{ minHeight: '20em' }}></div>
    <div className="alternating-timeline">
      <div className="row">
        <Crossbar isFirstRow={true} long={true} />
        <div className="col-sm-5" data-aos="fade-down">
          <div className="adalida-header"><span className="hello">Hello</span>, I am <span className="name">Ricardo</span></div>
        </div>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-sm-5 offset-sm-2">
          Welcome, I am Ricardo and I am passionate about <Typewriter
            options={{ strings: ['software engineering', 'clean code', 'scalable systems', 'test-driven development'], autoStart: true, loop: true }}
          />.
        </div>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-sm-5 offset-sm-2">
          I am a Software Engineer at Unit21.
        </div>
      </div>
    </div>
    <div style={{ minHeight: '20em' }}></div>
    <Timeline />
  </>
  )
}

export default RicardoPage