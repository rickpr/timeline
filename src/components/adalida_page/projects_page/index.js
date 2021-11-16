import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import Album from '../album'
import Project from './project'
import TimelineDescription from '../../timeline/timeline_description'

import meowWolfHome from '../meow_wolf_home.png'
import downArrow from './down_arrow.svg'
import competitiveAudit from './competitive_audit.svg'
import personas from './personas.svg'

const ProjectsPage = () => {
  const meowWolf =
    <div style={{display: 'grid', alignItems: 'center', justifyItems: 'space-between', gridTemplateColumns: '1fr 1fr 1fr', backgroundColor: '#000000' }}>
      <div
        key="meow-wolf"
        style={{display: 'grid', justifyItems: 'center', gridTemplateColumns: '1fr', gridTemplateRows: 'auto'}}
      >
        <div className="header meow-wolf">Meow Wolf</div>
        <img src={downArrow} alt="Down arrow" onClick={() => null /* TODO: SCROLL */}/>
      </div>
      <div key="space" />
      <div key="meow-wolf-image">
        <img src={meowWolfHome} alt="Meow Wolf Homepage" />
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
  const aboutProjectContent =
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '1em' }}>
      <div key="text" className="large-text">
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
  const aboutProject = <Project title="ABOUT THE PROJECT" content={aboutProjectContent} />

  const researchContent =
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '1em' }}>
      <div key="text" className="large-text">
        <div className="text-warning large" key="research">Research</div>
        <p>
          My research focused on Meow Wolf's business structure, history, locations, and future projects. I wanted to
          collect and learn as much information as possible. I paired this research with a competitive audit.
        </p>
      </div>
      <div key="audit" style={{ display: 'grid' }}>
        <div style={{ position: 'relative' }}>
          <img src={competitiveAudit} width="100%" alt="Competitive Audit" />
          <div style={{ position: 'absolute', minHeight: '80%', minWidth: '100%', backdropFilter: 'blue(10px)', top: '10%', backgroundColor: '#CCCCCCCC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'white', fontSize: '8em', textAlign: 'center' }}>Competitive Audit</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '10% 10% 10%', justifyContent: 'center', gap: '2em' }}>
          <div style={{ border: '1em solid #3DA834', borderRadius: '50%', paddingBottom: '4em', backgroundColor: '#3DA834' }}>
          </div>
          <div style={{ border: '1em solid gray', borderRadius: '50%' , paddingBottom: '4em', backgroundColor: 'gray' }}>
          </div>
          <div style={{ border: '1em solid gray', borderRadius: '50%' , paddingBottom: '4em', backgroundColor: 'gray' }}>
          </div>
        </div>
      </div>
    </div>
  const research = <Project title="1. Understand" content={researchContent} />

  const interviewContent =
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '1em' }}>
      <div key="audit" style={{ display: 'grid' }}>
        <div style={{ position: 'relative' }}>
          <img src={personas} width="100%" alt="Personas" />
          <div style={{ position: 'absolute', minHeight: '85%', minWidth: '100%', backdropFilter: 'blue(10px)', top: '7.5%', backgroundColor: '#CCCCCCCC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'white', fontSize: '8em', textAlign: 'center' }}>User Personas</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '10% 10% 10%', justifyContent: 'center', gap: '2em' }}>
          <div style={{ border: '1em solid #3DA834', borderRadius: '50%', paddingBottom: '4em', backgroundColor: '#3DA834' }}>
          </div>
          <div style={{ border: '1em solid gray', borderRadius: '50%' , paddingBottom: '4em', backgroundColor: 'gray' }}>
          </div>
          <div style={{ border: '1em solid gray', borderRadius: '50%' , paddingBottom: '4em', backgroundColor: 'gray' }}>
          </div>
        </div>
      </div>
      <div key="text" className="large-text">
        <div className="text-warning large" key="interviews">Interviews</div>
        <p>
          I utilized my network for user research. The combination of my investigative research and user research led to
          the design of a mobile in-app ticketing experience.
        </p>
      </div>
    </div>
  const interview = <Project title="2. Empathize" content={interviewContent} />

  return (
    <Album>
      {[meowWolf, aboutProject, research, interview]}
    </Album>
  )
}


export default ProjectsPage
