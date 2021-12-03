import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import Album from '../album'
import ColorBlock from './color_block'
import Project from './project'
import TimelineDescription from '../../timeline/timeline_description'

import meowWolfHome from './meow_wolf.png'
import downArrow from './down_arrow.svg'
import competitiveAudit from './competitive_audit.svg'
import personas from './personas.svg'
import loFi1 from './lo_fi_1.svg'
import loFi2 from './lo_fi_2.svg'

const ProjectsPage = () => {
  const meowWolf =
    <div style={{
      display: 'grid',
      alignItems: 'center',
      justifyItems: 'space-between',
      gridTemplateColumns: '1fr 1fr',
      backgroundColor: '#000000',
      minHeight: '100vh'
    }}>
      <div
        key="meow-wolf"
        style={{display: 'grid', justifyItems: 'center', gridTemplateColumns: '1fr', gridTemplateRows: 'auto'}}
      >
        <div className="header meow-wolf text-warning">Meow Wolf</div>
        <img src={downArrow} alt="Down arrow" onClick={() => null /* TODO: SCROLL */}/>
      </div>
      <img src={meowWolfHome} alt="Meow Wolf Homepage" style={{margin: '0 auto'}} />
    </div>

  const projectInfo = <>
    <h2 style={{color: '#3DA834'}} key="client-header">ROLES</h2>
      <ul className="large-text" key="client" style={{marginLeft: '1%'}}>
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
    <div style={{ display: 'grid', gridTemplateRows: '1fr 6fr' }} className="full-height">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: 'auto 0' }}>ABOUT THE PROJECT</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'min-content 1fr', columnGap: '10%' }}>
        <div className="large-text">
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
            They also host music festivals, create large scale art installations, and create and produce streaming content.
          </p>
          <div style={{ marginTop: '1em' }} key="link">
            <Link to="/adalida/projects"><span className="text-warning">VISIT THE SITE</span></Link>&nbsp;
            <span style={{ color: '#3DA834' }}><FontAwesomeIcon icon={faArrowRight} /></span>
          </div>
        </div>
        <div>
          <TimelineDescription description={projectInfo} />
        </div>
        <div />
      </div>
    </div>
  const aboutProject = <Project content={aboutProjectContent} />


  const bubbles =
    <div
      style={{ display: 'grid', gridTemplateColumns: '10% 10% 10%', justifyContent: 'center', width: '100%' }}
      className="fullheight"
    >
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{ border: '0.5em solid #3DA834', borderRadius: '50%', backgroundColor: '#3DA834', maxWidth: '1em', maxHeight: '1em' }} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{ border: '0.5em solid gray', borderRadius: '50%' , backgroundColor: 'gray', maxWidth: '1em', maxHeight: '1em'  }} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{ border: '0.5em solid gray', borderRadius: '50%' , backgroundColor: 'gray', maxWidth: '1em', maxHeight: '1em'  }} />
      </div>
    </div>

  const researchContent =
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '10%' }} className="full-height">
      <div className="large-text" style={{ display: 'grid', gridTemplateRows: '1fr 6fr' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: 'auto 0' }}>1. Understand</h1>
        </div>
        <div>
          <div className="text-warning large" key="research">Research</div>
          <p>
            My research focused on Meow Wolf's business structure, history, locations, and future projects. I wanted to
            collect and learn as much information as possible. I paired this research with a competitive audit.
          </p>
        </div>
      </div>
      <div style={{ display: 'grid', alignItems: 'top' }}>
        <div style={{ position: 'relative' }}>
          <img src={competitiveAudit} width="100%" alt="Competitive Audit" style={{ marginTop: '-10%' }} />
          <div style={{ position: 'absolute', minHeight: '80%', minWidth: '100%', backdropFilter: 'blue(10px)', top: 0, backgroundColor: '#CCCCCCCC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'white', fontSize: '8em', textAlign: 'center' }}>Competitive Audit</div>
          </div>
        </div>
        {bubbles}
      </div>
    </div>
  const research = <Project content={researchContent} />

  const interviewContent =
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '10%' }} className="full-height">
      <div style={{ display: 'grid' }}>
        <div style={{ position: 'relative' }}>
          <img src={personas} width="100%" alt="Personas" />
          <div style={{ position: 'absolute', minHeight: '85%', minWidth: '100%', backdropFilter: 'blue(10px)', top: '7.5%', backgroundColor: '#CCCCCCCC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'white', fontSize: '8em', textAlign: 'center' }}>User Personas</div>
          </div>
        </div>
        {bubbles}
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

  const problemStatementContent =
    <div className="large-text full-height">
      <div className="text-warning large">Problem Statement</div>
      <p>
        Brian is a young working adult who needs to purchase tickets to Meow Wolf because they are planning a day
        visit with friends.
      </p>
    </div>
  const problemStatement = <Project title="3. Define" content={problemStatementContent} />

  const loFiContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5em',
    backgroundColor: '#C4C4C4'
  }
  const ideateContent =
    <div className="large-text full-height">
      <div className="text-warning large">Design, Prototype, Test</div>
      <p>
        I prototyped my lo-fidelity designs and conducted user research on the flow and navigation.
        From the usability studies, it was clear many of the users' pain points could be solved with
        a stronger information architecture
      </p>
      <p>Check are the before and after lo-fi mockups</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <div style={loFiContainerStyle}><img src={loFi1} height="150%" /></div>
        <div style={loFiContainerStyle}><img src={loFi2} height="150%" /></div>
      </div>
      <div style={{textAlign: 'center'}}><h1>Description of what changed</h1></div>
    </div>
  const ideate = <Project title="4. Ideate" content={ideateContent} />

  const visualIdentityContent =
    <div className="large-text full-height">
      <div className="text-warning large">Visual Identity</div>
      <p>
        Meow Wolf already had an awesome design system and identity.
        Therefore, my job was to ensure consistent branding from the website to the mobile app.
      </p>
      <h2 style={{fontWeight: '900'}}>Colors</h2>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1em'}}>
        <ColorBlock color="#EC0089" /> <ColorBlock color="#412784" />
        <ColorBlock color="#3DA834" /> <ColorBlock color="#EC0089" />
        <ColorBlock color="#00A00C" /> <ColorBlock color="#000000" />
        <ColorBlock color="#FFF21F" /> <ColorBlock color="#000000" />
      </div>
      <h2 style={{fontWeight: '900'}}>Typography</h2>
      <h2 style={{fontFamily: 'Montserrat'}}>Montserrat, Sans-Serif</h2>
      <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>Montserrat, Sans-Serif</h2>
      <h2 style={{fontWeight: '900', fontFamily: 'Montserrat'}}>Montserrat, Sans-Serif</h2>
      <h2 style={{fontStyle: 'italic', fontFamily: 'Montserrat'}}>Montserrat, Sans-Serif</h2>
    </div>
  const visualIdentity = <Project title="3. Design System" content={visualIdentityContent} />

  const finalDesignContent =
    <div className="large-text">
      <div className="text-warning large">Final Design</div>
      <p>Check out my final design!</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
        <img src={meowWolfHome} width="100%" />
        <img src={meowWolfHome} width="100%" />
        <img src={meowWolfHome} width="100%" />
        <img src={meowWolfHome} width="100%" />
      </div>
    </div>
  const finalDesign = <Project title="4. Solution" content={finalDesignContent} />

  const conclusionContent =
    <div className="large-text">
      <div className="text-warning large">What I leanred</div>
      <p>
        I'm so thankful for the opportunity to work and learn so much from this project.
        In summary, I learned about the general user experience process and how research, especially good research,
        can positively impact user design solutions.
      </p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
        <h1>Usability Studies</h1>
        <p>
          Data-driven user experience design casn save you time and resources while increasing your chance at creating
          effective designs.
        </p>
        <h1>Adapting Quickly</h1>
        <p>Keeping an updated information architecture handy is helpful in creating impactful designs.</p>
        <h1>New Software</h1>
        <p>
          I started using Figma with this project and it was awesome to learn about the abundance of online resources
          and UX communities. Also, YouTube and Google are your friends!
        </p>
        <h1>Be Mindful</h1>
        <p>
          Always remember your designs are intended to solve the user's problem while also probomting business growth
          and needs. Set aside extreme usability idealism.
        </p>
      </div>
    </div>
  const conclusion = <Project title="5. Conclusion" content={conclusionContent} />

  return (
      [meowWolf, aboutProject, research, interview, problemStatement, ideate, visualIdentity, finalDesign, conclusion]
  )
}


export default ProjectsPage
