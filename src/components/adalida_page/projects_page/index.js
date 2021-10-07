import { Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'

import useAnimateOnScroll from '../../../hooks/use_animate_on_scroll'

import Timeline from '../../timeline'
import TimelineDescription from '../../timeline/timeline_description'

import meow_wolf_home from '../meow_wolf_home.png'
import donor_page from '../donor_page.png'
import down_arrow from './down_arrow.svg'
import wireframe from './wireframe.png'

const ProjectsPage = () => {
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
  const innerHeight = () => typeof window === 'undefined' ? 1920 : window.innerHeight;
  const meowWolfHome = <img src={meow_wolf_home} alt="Meow Wolf Homepage" style={{maxHeight: innerHeight() * 0.8}} />

  const meowWolf =
    <div className="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'top', minHeight: innerHeight(), marginTop: '-5em'}}>
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
    <div style={{marginTop: '13em'}}>
      <h1 ref={aboutRef}>ABOUT THE PROJECT</h1>
      <h1 className="text-primary">Origin</h1>
      <div class="row">
        <div class="col-sm-8 large-text">
        I like the company Meow Wolf (we are both New Mexico Native). 
        They opened, and then quickly closed, a new location in Las Vegas, Nevada during COVID-19. 
        I wanted to learn user experience design and I wanted to visit the new exhibit, Omega Mart. 
        This project was my way of marrying the two while I waited for the re-opening. 

        Meow Wolf is an American arts and entertainment company. They host interactive non-linear art 
        museum with locations in New Mexico, Nevada, and Colorado with day and event tickets. They also 
        host music festivals, create large scale art installations, and create and produce streaming 
        content.
        </div>
        <div class="col-sm-4" style={{marginTop: '-9em'}}>
          <TimelineDescription description={projectInfo} />
        </div>
      </div>
    </div>

  const phonePictures =
    <div className="row" style={{
      marginTop: '13em'}}>
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
    <div style={{marginTop: '13em'}}>
      <h1>1. Understand, Empathize, Define</h1>
      <h1 className="text-primary">Conducting Interviews</h1>
      <div className="row" key="description">
        <div className="col-12">
        I began researching Meow Wolf’s business structure, history, locations, and future projects. 
        I also conducted interviews with my friends and family. The combination of my investigative research
        and user research, lead to the design of a mobile in-app ticketing experience. 
        </div>
      </div>
      <div style={{minHeight: '2em'}} key="spacer-before-gallery"></div>
      {galleryRow('top')}
      <div style={{minHeight: '2em'}} key="spacer-within-gallery"></div>
      {galleryRow('bottom')}
      <div className="row" key="finding-creatives">
        <div className="col-6" key="heading">
          <h1>01 - Finding Creatives</h1>
        </div>
        <div className="col-6" key="description">
          Meow Wolf is an interactive non-linear art museum with locations in New Mexico, Nevada, and Colorado where
          they host day and event vists. My goal for this project was to create an enjoyable user experience when
          purchasing tickets, checking in for an event, and siging up for an account. This project was my first user
          experience project and any content from this app is fictional.
        </div>
      </div>
      <div className="row" key="interviewing">
        <div className="col-6" key="heading">
          <h1>02 - Ideate, Prototyping, Testing</h1>
        </div>
        <div className="col-6" key="description">
          Meow Wolf is an interactive non-linear art museum with locations in New Mexico, Nevada, and Colorado where
          they host day and event vists. My goal for this project was to create an enjoyable user experience when
          purchasing tickets, checking in for an event, and siging up for an account. This project was my first user
          experience project and any content from this app is fictional.
        </div>
      </div>
      <div style={{minHeight: '2em'}} key="spacer-before-box"></div>
      <div className="row" key="gray-box" style={{backgroundColor: '#CCCCCC', minHeight: '18em'}} />
      <div style={{minHeight: '2em'}} key="spacer-after-box"></div>
      <div className="row" key="transcripting">
        <div className="col-6" key="heading">
          <h1>03 - Transcripting</h1>
        </div>
        <div className="col-6" key="description">
          Meow Wolf is an interactive non-linear art museum with locations in New Mexico, Nevada, and Colorado where
          they host day and event vists. My goal for this project was to create an enjoyable user experience when
          purchasing tickets, checking in for an event, and siging up for an account. This project was my first user
          experience project and any content from this app is fictional.
        </div>
      </div>
      <div className="row" key="rewriting">
        <div className="col-6" key="heading">
          <h1>04 - Rewriting and Gathering Insights</h1>
        </div>
        <div className="col-6" key="description">
          Meow Wolf is an interactive non-linear art museum with locations in New Mexico, Nevada, and Colorado where
          they host day and event vists. My goal for this project was to create an enjoyable user experience when
          purchasing tickets, checking in for an event, and siging up for an account. This project was my first user
          experience project and any content from this app is fictional.
        </div>
      </div>
    </div>

  const insightsAndSolutions =
    <div style={{marginTop: '13em'}}>
      <h1>2. INSIGHTS</h1>
      <h1 className="text-primary">Information Architecture</h1>
      <div className="row" key="description">
        <div className="col-12">
          After conducting usability studies for my wireframes, it was clear my information architecutre was not well
          defined. I was able to use this feedback, iterate, and design a more suitable architecture.
        </div>
      </div>
      <div style={{minHeight: '2em'}} key="spacer-before-gallery"></div>
      {galleryRow('insights')}
      <div style={{minHeight: '2em'}} key="spacer-after-gallery"></div>
      <div className="row" key="before">
        <div className="col-6" key="heading">
          <h1>Before Architecture</h1>
        </div>
        <div className="col-6" key="description">
          Before focusing on the information architecture, it was clear that the app was focusing on the wrong needs.
          It was focusing on the path to purchase a ticket, not the user’s path, nor the business need.
        </div>
      </div>
      <div style={{minHeight: '2em'}} key="spacer-between-architecture"></div>
      <div className="row" key="after">
        <div className="col-6" key="heading">
          <h1>After Architecture</h1>
        </div>
        <div className="col-6" key="description">
          After improving my designs based off my research, it was clear that a week information architucture was the
          source of many of my user’s pain points.
        </div>
      </div>
    </div>

  const visualIdentity =
    <div style={{marginTop: '13em'}}>
      <h1>3. Design</h1>
      <h1 className="text-primary">Visual Identity</h1>
      <div className="row" key="description">
        Meow Wolf already has a great design system. This shifted my focus to brand consistency and implementation.
      </div>
      <div className="row" key="color-palette">
        <div className="col-12" key="heading">
          <h1>01 - Color Palette</h1>
        </div>
      </div>
      <div className="row" key="palette">
        <div className="col-sm-3" key="pink">
          <div className="container" style={{backgroundColor: '#EF5DA8', minHeight: '9em'}}></div>
        </div>
        <div className="col-sm-3" key="gray-1">
          <div className="container" style={{backgroundColor: '#CCCCCC', minHeight: '9em'}}></div>
        </div>
        <div className="col-sm-3" key="gray-2">
          <div className="container" style={{backgroundColor: '#CCCCCC', minHeight: '9em'}}></div>
        </div>
        <div className="col-sm-3" key="gray-3">
          <div className="container" style={{backgroundColor: '#CCCCCC', minHeight: '9em'}}></div>
        </div>
      </div>
      <div className="row" key="typography">
        <div className="col-6" key="heading">
          <h1>02 - Typography</h1>
        </div>
        <div className="col-6" key="description">
          Meow Wolf is an interactive non-linear art muesuem with locations in New Mexico, Nevada, and Colorado where
          they host day and event vists. My goal for this project was to create an enjoyable user experience when
          purchasing tickets, checking in for an event, and siging up for an account. This project was my first user
          experience project and any content from this app is fictional.
        </div>
      </div>
    </div>

  const conclusion =
    <div style={{marginTop: '13em'}}>
      <h1>4. Conclusion</h1>
      <h1 className="text-primary">What I learned</h1>
      <div className="row" key="research">
        <div className="col-6" key="heading">
          <h1>01 - Research</h1>
        </div>
        <div className="col-6" key="description">
          Becuase this was my first full UX project, I had very little knowledge and experience conducting
          interviews and building empathy before desiging a product. After, I learned how vital this step is in
          determining the success or failure of your design.
        </div>
      </div>
      <div className="row" key="information-architecture">
        <div className="col-6" key="heading">
          <h1>02 - Research</h1>
        </div>
        <div className="col-6" key="description">
          Having a good information architecture will save you and your user’s time and stress. When I first started
          desiging, I designed from my head to my paper, which resulted in a lot of unused and unncessary desiging and
          some very frustrated users. After developing my architecture, it was easier and more flexable to design.
        </div>
      </div>
      <div className="row" key="figma">
        <div className="col-6" key="heading">
          <h1>03 - Figma</h1>
        </div>
        <div className="col-6" key="description">
          This was my first project using Figma and I really enjoyed learning the software. The abundant supply of
          tutorials, articles, and forums made it easy and fun to learn.
        </div>
      </div>
    </div>

  return (
    <>
      <div style={{backgroundColor: '#000000'}} key="top">
        {meowWolf}
      </div>
      <div style={{borderLeft: '5px solid', minHeight: '18.5em', marginLeft: '5%', borderColor: '#39ff14', position: 'absolute'}} key="line"></div>
      <Timeline
        timelinePosts={[aboutProject, phonePictures, research, insightsAndSolutions, visualIdentity]}
        connected
      />
      <div style={{minHeight: '13.5em'}} key="spacer" />
    </>
  )
}


export default ProjectsPage
