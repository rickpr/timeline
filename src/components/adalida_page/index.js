import React from 'react'
import Typewriter from 'typewriter-effect';

import useAOS from '../../hooks/useAOS'
import useIsMobile from '../../hooks/useIsMobile'

import Footer from './footer'
import WideTimeline from '../timeline/wide_timeline'
import NarrowTimeline from '../timeline/narrow_timeline'
import TimelineDescription from '../timeline/timeline_description'

import meow_wolf_home from './meow_wolf_home.png'
import donor_page from './donor_page.png'

const AdalidaPage = () => {
  useAOS()
  const spacer = <div style={{minHeight: '5em'}}></div>
  const aboutMe =
    <div>
      <div className="row">
        <div data-aos="fade-down">
          <div className="adalida-header"><span className="hello">Hello</span>, I am <span className="name">Adalida</span></div>
        </div>
      </div>
      <div className="row" data-aos="fade-up">
        <div>
          Welcome, I am Adalida and I am passionate about <Typewriter
            options={{ strings: ['interaction design', 'information architecture', 'product design'], autoStart: true, loop: true }}
          />.
        </div>
      </div>
      <div className="row" data-aos="fade-up">
        <div>
          Currently, I am working as a UX Designer in training.
        </div>
      </div>
    </div>
  const meowWolfHome = <img src={meow_wolf_home} alt="Meow Wolf Homepage" />
  const meowWolfImage = <div className="col-sm-5" data-aos="fade-up">{meowWolfHome}</div>
  const caseStudy =
    <>
      <div className="col-sm-5" data-aos="fade-up">
        {meowWolfHome}
      </div>
      <TimelineDescription title="Meow Wolf" description="View case study" />
    </>

  const donorPage =
    <>
      <div className="col-sm-5" data-aos="fade-up">
        <img src={donor_page} alt="Donor App"/>
      </div>
      <TimelineDescription title="Donor App" description="This is a time capsule of my design journey" />
    </>

  const timelinePosts = [aboutMe, meowWolfImage, caseStudy, donorPage]

  const timeline = useIsMobile() ? <NarrowTimeline timelinePosts={timelinePosts} /> : <WideTimeline timelinePosts={timelinePosts} />

  return (
    <>
      {spacer}
      {timeline}
      {spacer}
      <Footer />
    </>
  )
}


export default AdalidaPage
