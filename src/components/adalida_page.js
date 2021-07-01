import React from 'react'
import Typewriter from 'typewriter-effect';

import useAOS from '../hooks/useAOS'
import Crossbar from './timeline/alternating_timeline/crossbar'
import Timeline from './timeline'

const AdalidaPage = () => {
  useAOS()
  return (<>
    <div style={{ minHeight: '20em' }}></div>
    <div className="alternating-timeline">
      <div className="row">
        <Crossbar isFirstRow={true} long={true} />
        <div className="col-sm-5" data-aos="fade-down">
          <div className="adalida-header"><span className="hello">Hello</span>, I am <span className="name">Adalida</span></div>
        </div>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-sm-5 offset-sm-2">
          Welcome, I am Adalida and I am passionate about <Typewriter
            options={{ strings: ['interaction design', 'information architecture', 'product design'], autoStart: true, loop: true }}
          />.
        </div>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-sm-5 offset-sm-2">
          Currently, I am working as a UX Designer in training.
        </div>
      </div>
    </div>
    <div style={{ minHeight: '20em' }}></div>
    <Timeline timelineId="4" />
  </>
  )
}

export default AdalidaPage
