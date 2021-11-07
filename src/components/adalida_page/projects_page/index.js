import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import Album from '../album'
import Timeline from '../../timeline'
import TimelineDescription from '../../timeline/timeline_description'

import meow_wolf_home from '../meow_wolf_home.png'
import donor_page from '../donor_page.png'
import down_arrow from './down_arrow.svg'
import wireframe from './wireframe.png'

const ProjectsPage = () => {
  const meowWolfHome = <img src={meow_wolf_home} alt="Meow Wolf Homepage" />

  const meowWolf =
    <div style={{display: 'grid', alignItems: 'center', justifyItems: 'space-between', gridTemplateColumns: '1fr 1fr 1fr', backgroundColor: '#000000' }}>
      <div
        key="meow-wolf"
        style={{display: 'grid', justifyItems: 'center', gridTemplateColumns: '1fr', gridTemplateRows: 'auto'}}
      >
        <div className="header meow-wolf">Meow Wolf</div>
        <img src={down_arrow} alt="Down arrow" onClick={() => null /* TODO: SCROLL */}/>
      </div>
      <div key="space" />
      <div key="meow-wolf-image">
        {meowWolfHome}
      </div>
    </div>

  const projectInfo = <>
    <h2 style={{color: '#3DA834'}} key="client-header">ROLES</h2>
    <ul className="large-text" key="client">
      <li>UX/UI Designer</li>
      <li>UX Researcher</li>
      <li>Prototyping</li>
      <li>User Testing</li>
    </ul>
    <h2 style={{color: '#3DA834'}} key="role-header">DURATION</h2>
    <ul className="large-text" key="role">
      <li>May 2020 - June 2020</li>
    </ul>
    <h2 style={{ color: '#3DA834' }} key="date-header">MEDIUM</h2>
    <ul className="large-text" key="date">
      <li>Mobile App</li>
    </ul>
  </>
  const aboutProject =
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
      <div key="text" className="large-text">
        <h1>ABOUT THE PROJECT</h1>
        <div className="text-warning large" key="origin">Origin</div>
        <p key="first-paragraph">
          I like the company Meow Wolf (we are both New Mexico Native).
          They opened, and then quickly closed, a new location in Las Vegas, Nevada during COVID.
          I wanted to learn user experience design and I wanted to visit the new exhibit, Omega Mart.
          This project was my way of marrying the two while I waited for the re-opening.
        </p>
        <p key="second-paragraph">
          Meow Wolf is an American arts and entertainment company.
          They host interactive non-linear art muesuem with locations in New Mexico, Nevada, and Colorado with day and event tickets.
          They also host music festivals, create large scale art isntallations, and create and produce streaming content.
        </p>
        <div style={{ marginTop: '1em' }} key="link">
          <Link to="/adalida/projects"><span className="text-warning">VISIT THE SITE</span></Link>&nbsp;
          <span style={{ color: '#3DA834' }}><FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
      </div>
      <div key="description">
        <TimelineDescription description={projectInfo} />
      </div>
    </div>

  const phonePictures =
    <div style={{backgroundColor: '#000000'}}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div key="firstMeowWolfImage">
          {meowWolfHome}
        </div>
        <div key="secondMeowWolfImage">
          {meowWolfHome}
        </div>
        <div key="thirdMeowWolfImage">
          {meowWolfHome}
        </div>
        <div key="fourthMeowWolfImage">
          {meowWolfHome}
        </div>
      </div>
        <div className="text-warning">
          Meow Wolf is officially open again, visit them today!
          <span style={{color: '#3DA834' }}><FontAwesomeIcon icon={faArrowRight} /></span>
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

  const researchAndInterviews =
    <div>
      <div key="text" className="large-text">
        <h1>1. Understand, Empathize, and Define</h1>
        <div className="text-warning large" key="origin">Research and Interviews</div>
        <p key="first-paragraph">
          I began researching Meow Wolf’s business structure, history, locations, and future projects.
          I also conducted interviews with my friends and family.
          The combination of my investigative research and user research, lead to the design of a mobile in-app ticketing experience.
        </p>
        <p key="second-paragraph">
          Meow Wolf is an American arts and entertainment company.
          They host interactive non-linear art muesuem with locations in New Mexico, Nevada, and Colorado with day and event tickets.
          They also host music festivals, create large scale art isntallations, and create and produce streaming content.
        </p>
        <div style={{ marginTop: '1em' }} key="link">
          <Link to="/adalida/projects"><span className="text-warning">VISIT THE SITE</span></Link>&nbsp;
          <span style={{ color: '#3DA834' }}><FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
      </div>
      <div key="description">
        <TimelineDescription description={projectInfo} />
      </div>
    </div>

  const research =
    <div style={{marginTop: '13em'}}>
      <h1>1. RESEARCH</h1>
      <h1 className="text-primary">Conducting Interviews</h1>
      <div className="row" key="description">
        <div className="col-12">
          This was my first time conducting interviews for a UX design project so I started learning more about
          interviewing. I read material on how to preapre, conduct, and report on interviews and usability studies.
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
          <h1>02 - Interviewing</h1>
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
    <Album>
      {[meowWolf, aboutProject, phonePictures, research, insightsAndSolutions, visualIdentity]}
    </Album>
  )
}


export default ProjectsPage
