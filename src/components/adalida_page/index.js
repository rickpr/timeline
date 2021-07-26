import { Link } from 'gatsby'
import React from 'react'
import Typewriter from 'typewriter-effect';

import useAnimateOnScroll from '../../hooks/use_animate_on_scroll'

import Timeline from '../timeline/'
import TimelineDescription from '../timeline/timeline_description'

import meow_wolf_home from './meow_wolf_home.png'
import donor_page from './donor_page.png'

const AdalidaPage = () => {
  useAnimateOnScroll()
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
  const meowWolfImage = <div className="col-sm-6" data-aos="fade-up">{meowWolfHome}</div>
  const caseStudyDescription = <Link to="projects">View case study</Link>
  const caseStudy =
    <div class="row">
      <div className="col-sm-6" data-aos="fade-up">
        {meowWolfHome}
      </div>
      <div className="col-sm-6" data-aos="fade-up">
        <TimelineDescription title="Meow Wolf" description={caseStudyDescription}/>
      </div>
    </div>

  const donorPage =
    <div class="row">
      <div className="col-sm-6" data-aos="fade-up">
        <img src={donor_page} alt="Donor App"/>
      </div>
      <div className="col-sm-6" data-aos="fade-up">
        <TimelineDescription title="Donor App" description="This is a time capsule of my design journey" />
      </div>
    </div>

  const timelinePosts = [aboutMe, meowWolfImage, caseStudy, donorPage]

  return (
    <>
      {spacer}
      <Timeline timelinePosts={timelinePosts} />
      {spacer}
    </>
  )
}


export default AdalidaPage
