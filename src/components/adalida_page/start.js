import { Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'

import useAnimateOnScroll from '../../../hooks/use_animate_on_scroll'

import Timeline from '../../timeline'
import TimelineDescription from '../../timeline/timeline_description'

import meow_wolf_home from '../meow_wolf_home.png'
import donor_page from '../donor_page.png'
import down_arrow from './down_arrow.svg'
import wireframe from './wireframe.png'

const Start = () => {
  useAnimateOnScroll()
  const aboutRef = useRef(null)
  const scrollToAbout = () => aboutRef.current.scrollIntoView({behavior: 'smooth'})

  useEffect(() => {
    let lastScrollWindowTop = 0
    const scrollFullPage = event => {
      const topOfAboutSection = aboutRef.current.getBoundingClientRect().top
      const topOfWindow = window.pageYOffset || document.documentElement.scrollTop
      const scrollingDown = topOfWindow > lastScrollWindowTop
      lastScrollWindowTop = Math.max(0, topOfWindow)
      if (scrollingDown && topOfWindow < topOfAboutSection) scrollToAbout()
    }
    window.addEventListener('scroll', scrollFullPage)
    return () => window.removeEventListener('scroll', scrollFullPage)
  }, [])
  const innerHeight = () => typeof window === undefined ? 1920 : window.innerHeight;
  const meowWolfHome = <img src={meow_wolf_home} alt="Meow Wolf Homepage" style={{maxHeight: innerHeight() * 0.8}} />

  const meowWolf =
    <div className="row" style={{display: 'flex', alignItems: 'center', minHeight: innerHeight()}}>
      <div
        className="col-sm-4"
        data-aos="fade-down"
        key="meow-wolf"
        style={{display: 'grid', justifyItems: 'center', gridTemplateColumns: '1fr', gridTemplateRows: 'auto'}}
      >
        <div className="header meow-wolf">Meow Wolf</div>
        <img src={down_arrow} alt="Down arrow" onClick={scrollToAbout}/>
      </div>
      <div className="col-sm-4" data-aos="fade-up" key="firstMeowWolfImage">
        {meowWolfHome}
      </div>
      <div className="col-sm-4" data-aos="fade-up" key="secondMeowWolfImage">
        {meowWolfHome}
      </div>
    </div>

  const projectInfo = <>
      <h3 className="text-primary" key="client-header">ROLE</h3>
      <ul className="large-text" key="client">
        <li>User Experience</li>
        <li>Visual Design</li>
        <li>Prototyping</li>
        <li>User Testing</li>
        <li>Interaction Design</li>
      </ul>
      <h3 className="text-primary" key="role-header">Client</h3>
      <ul className="large-text" key="role">
        <li>Meow Wolf</li>
      </ul>
      <h3 className="text-primary" key="date-header">Date:</h3>
      <ul className="large-text" key="date">
        <li>May 2020 - June 2020</li>
      </ul>
    </>
  const aboutProject =
    <div style={{minHeight: innerHeight()}}>
      <h1 ref={aboutRef}>ABOUT THE PROJECT</h1>
      <h1 className="text-primary">Interactive Non-Linear Art Exhibit</h1>
      <div class="row">
        <div class="col-sm-8 large-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random
        </div>
        <div class="col-sm-4" style={{marginTop: '-9em'}}>
          <TimelineDescription description={projectInfo} />
        </div>
      </div>
    </div>

  const phonePictures =
    <div className="row" style={{minHeight: innerHeight()}}>
      <div className="col-sm-4" data-aos="fade-up" key="firstMeowWolfImage">
        {meowWolfHome}
      </div>
      <div className="col-sm-4" data-aos="fade-up" key="secondMeowWolfImage">
        {meowWolfHome}
      </div>
      <div className="col-sm-4" data-aos="fade-up" key="thirdMeowWolfImage">
        {meowWolfHome}
      </div>
    </div>

  const galleryRow = key =>
  <div className="row" key={key}>
    {Array.from({length: 4}, (_, index) =>
      <div className="col-sm-3" key={index}>
        <div className="container" style={{backgroundColor: '#CCCCCC', minHeight: '9em'}} key={index}></div>
      </div>
    )}
  </div>

  const research =
    <div style={{minHeight: innerHeight()}}>
      <h1>01. RESEARCH</h1>
      <h1 className="text-primary">Conducting Interviews</h1>
      <div className="row" key="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>
      {galleryRow('top')}
      <div style={{minHeight: '1em'}}></div>
      {galleryRow('bottom')}
    </div>

  const insightsAndSolutions =
    <div style={{minHeight: innerHeight()}}>
      <h1>02. INSIGHTS &amp; SOLUTIONS</h1>
      <h1 className="text-primary">Information Architecture</h1>
      <div className="row" key="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>
      <div style={{backgroundColor: '#CCCCCC', minHeight: '9em'}} key="grayBox"></div>
      <div className="row" key="top">
        <div className="col-sm-5">
          <TimelineDescription description={<h3 className="text-primary">Before:</h3>} style={{marginTop: 0}}/>
        </div>
        <div className="col-sm-5 offset-sm-2">
          <TimelineDescription description={<h3 className="text-primary">After:</h3>} style={{marginTop: 0}}/>
        </div>
      </div>
      <div className="row" key="bottom">
        <div className="col-sm-5">
          <TimelineDescription description={<h3 className="text-primary">Before:</h3>} style={{marginTop: 0}}/>
        </div>
        <div className="col-sm-5 offset-sm-2">
          <TimelineDescription description={<h3 className="text-primary">After:</h3>} style={{marginTop: 0}}/>
        </div>
      </div>
      <img src={wireframe} alt="Meow Wolf Wireframe" />
      <div className="row" key="wireframe-description">
        Developing my information architecture also helped solve another user problem, which was navigating between
        locations. This allowed for a content driven navigation instead of a flat navigation.
      </div>
    </div>

  const visualIdentity =
    <div style={{minHeight: innerHeight()}}>
      <h1>03. VISUAL IDENTITY</h1>
      <h1 className="text-primary">Conducting Interviews</h1>
      <div className="row" key="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>
      <div className="row" key="before">
        <div className="col-sm-4">
          <h3 className="text-primary">Before:</h3>
        </div>
      </div>
      {galleryRow('gallery')}
      <div className="row" key="typography">
        <div className="col-sm-4">
          <h3 key="typography"><strong>Typography</strong></h3>
          <h3 key="abcde">AaBbCcDdEe</h3>
        </div>
        <div className="col-sm-4 offset-sm-4">
          <h3 key="nothing"><br /></h3>
          <h3 key="abcde">AaBbCcDdEe</h3>
        </div>
      </div>
    </div>

  return (
    <>
      <div style={{backgroundColor: '#000000'}} key="top">
        <Timeline timelinePosts={[meowWolf]} />
      </div>
      <div style={{borderLeft: '5px solid', minHeight: '5em', marginLeft: '5%', borderColor: '#39ff14'}} key="line"></div>
      <Timeline timelinePosts={[aboutProject, phonePictures, research, insightsAndSolutions, visualIdentity]} />
      <div style={{minHeight: '5em'}} key="spacer"></div>
    </>
  )
}


export default ProjectsPage
