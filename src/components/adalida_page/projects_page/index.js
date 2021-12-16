import { Link } from 'gatsby'
import React, { forwardRef, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import ColorCircle from './color_circle'
import Project from './project'
import TimelineDescription from '../../timeline/timeline_description'
import CaptionGallery from '../../caption_gallery'
import Title from './title'

import useCounter from '../../../hooks/use_counter'

// Image
import architecture from './architecture.png'
import meowWolfHome from '../../../images/meow_wolf.png'
import downArrow from '../../../images/down_arrow.svg'
import personas from './personas.svg'
import personasOne from './personas_one.svg'
import userJourneyMap1 from './user_journey_map_1.svg'
import userJourneyMap2 from './user_journey_map_2.svg'

// Video
import beforeLoFi from '../../../videos/before_lo_fi.mp4'
import afterHiFi from '../../../videos/after_hi_fi.mp4'

const ProjectsPage = () => {
  const counter = useCounter()
  const contentStart = useRef()
  const meowWolf = <Title title="Meow Wolf" image={meowWolfHome} scrollTarget={contentStart} />

  const projectInfo = <>
    <h2 style={{ color: '#3DA834' }}>ROLES</h2>
    <ul className="roles-list" key="client">
      <li>UX/UI Designer</li>
      <li>UX Researcher</li>
      <li>Prototyping</li>
      <li>User Testing</li>
    </ul>
    <h2 style={{ color: '#3DA834' }} key="role-header">DURATION</h2>
    <ul className="roles-list">
      <li>May 2020 - June 2020</li>
    </ul>
    <h2 style={{ color: '#3DA834' }} key="date-header">MEDIUM</h2>
    <ul className="roles-list" key="date">
      <li>Mobile App</li>
    </ul>
  </>
  const aboutProjectContent =
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'min-content 1fr', columnGap: '10%' }}
    >
      <div className="large-text">
        <div className="text-warning large" key="origin">Origin</div>
        <p key="first-paragraph">
          I like the company Meow Wolf (we are both native to New Mexico).
          They opened, and then quickly closed, a new location in Las Vegas, Nevada during the pandemic.
          I wanted to learn user experience design and I wanted to visit the new exhibit, Omega Mart.
          This project was my way of marrying the two while I waited for the re-opening.
        </p>
        <p key="second-paragraph">
          Meow Wolf is an American arts and entertainment company.
          They host interactive non-linear art museum with locations in New Mexico, Nevada, and Colorado with day and event tickets.
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
    </div>
  const ProjectForwardRef = forwardRef((props, ref) => <Project ref={ref} title={props.title} content={props.content} />)
  const aboutProject = <Project forwardRef={contentStart} title="ABOUT THE PROJECT" content={aboutProjectContent} />

  const researchContent =
    <>
      <div className="large-text">
        <div className="text-warning large" key="research">Research</div>
        <p>
          My research focused on Meow Wolf's business structure, history, locations, and future projects. I wanted to
          collect and learn as much information as possible. I paired this research with a competitive audit.
        </p>
      </div>
      <CaptionGallery
        photos={[architecture, userJourneyMap1, userJourneyMap2]}
        caption="User Persona 1"
        id={counter()}
      />
    </>

  const interviewContent =
    <>
      <CaptionGallery photos={[personas, personasOne]} caption="User Personas" id={counter()} />
      <div key="text" className="large-text">
        <h1>2. Empathize</h1>
        <div className="text-warning large" key="interviews">Interviews</div>
        <p>
          I utilized my network for user research. The combination of my investigative research and user research led to
          the design of a mobile in-app ticketing experience.
        </p>
      </div>
    </>
  const researchAndInterviewContent =
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'min-content min-content 1fr',
      columnGap: '10%',
      rowGap: '1em',
      minHeight: '100vh'
    }}>
      {researchContent}
      {interviewContent}
      <div />
    </div>
  const researchAndInterview = <Project title="1. Understand" content={researchAndInterviewContent} />

  const problemStatementContent =
    <div style={{ display: 'grid', minHeight: '100vh' }}>
      <div className="large-text">
        <div className="text-warning large">Problem</div>
        <p>
          Brian is a young working adult who needs to purchase tickets to Meow Wolf because they are planning a day
          visit with friends.
        </p>
      </div>
    </div>
  const problemStatement = <Project title="3. Define" content={problemStatementContent} />

  const videoContainerStyle = {
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '5em 0',
    backgroundColor: '#000000',
    gridTemplateRows: '8fr 1fr',
    gridTemplateColumns: '1fr'
  }
  const ideateContent =
    <div className="large-text">
      <div className="text-warning large">Design, Prototype, Test</div>
      <p>
        I prototyped my lo-fidelity designs and conducted user research on the flow and navigation.
        From the usability studies, it was clear many of the users' pain points could be solved with
        a stronger information architecture.
      </p>
      <p>Check out the before and after lo-fi mockups</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(calc(280px + 5em), 1fr))' }}>
        <div style={videoContainerStyle}>
          <video src={beforeLoFi} type="video/mp4" controls style={{ margin: '0 auto' }} />
          <div style={{ textAlign: 'center' }}>Before Video</div>
        </div>
        <div style={videoContainerStyle}>
          <video src={afterHiFi} type="video/mp4" controls style={{ margin: '0 auto' }} />
          <div style={{ textAlign: 'center' }}>After Video</div>
        </div>
      </div>
    </div>
  const ideate = <Project title="4. Ideate" content={ideateContent} />

  const visualIdentityRowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1em',
    marginBottom: '2em'
  }
  const visualIdentityContent =
    <div className="large-text">
      <div className="text-warning large">Primary Colors</div>
      <div style={visualIdentityRowStyle}>
        <ColorCircle color="#000000" /> <ColorCircle color="#EC0089" /> <ColorCircle color="#3DA834" />
      </div>
      <div className="text-warning large">Secondary Colors</div>
      <div style={visualIdentityRowStyle}>
        <ColorCircle color="#C4C4C4" /> <ColorCircle color="#00A0CC" /> <ColorCircle color="#FFF21F" />
      </div>
      <div className="text-warning large">Typography</div>
      <h1 style={{
        fontWeight: '400',
        fontFamily: 'Montserrat',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(12em, 1fr))',
        justifyContent: 'space-between'
      }}>
        <div style={{ whiteSpace: 'nowrap' }}>Montserrat, Sans-Serif</div> <div>AaBbCcDdEe</div> <div>0123546789</div>
      </h1>
    </div>
  const visualIdentity = <Project title="Defining the Visual Identity" content={visualIdentityContent} />

  const finalDesignContent =
    <div className="large-text">
      <p>Check out my final design!</p>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', float: 'left', height: 0 }}>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', height: '100%', position: 'absolute', left: 0 }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTgLCuNQeV3mYEvH2kp8gxz%2FMeow-Wolf-Hi-fi%3Fpage-id%3D349%253A1375%26node-id%3D714%253A214%26starting-point-node-id%3D714%253A214%26scaling%3Dscale-down"
          allowFullScreen
        />
      </div>
    </div>
  const finalDesign = <Project title="5. Solution" content={finalDesignContent} />

  const conclusionContent =
    <div className="large-text">
      <div className="text-warning large">What I learned</div>
      <div style={{ minHeight: '2em ' }} />
      <p>
        I'm so thankful for the opportunity to work and learn so much from this project.
        In summary, I learned about the general user experience process and how research, especially good research,
        can positively impact user design solutions.
      </p>
      <div style={{ minHeight: '2em ' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }} className="what-i-learned">
        <h1>Usability Studies</h1>
        <p>
          Data-driven user experience design can save you time and resources while increasing your chance at creating
          effective designs.
        </p>
        <h1>Adapting Quickly</h1>
        <p>Keeping an updated information architecture handy is helpful in creating impactful designs.</p>
        <h1>Learning New Resources</h1>
        <p>
          I designed using the tool Figma for this project and it was awesome to learn about the abundance of online resources
          and UX communities. Also, YouTube and Google are your friends!
        </p>
        <h1>Be Mindful</h1>
        <p>
          Always remember your designs are intended to solve the user's problem while also promoting business growth
          and needs. Set aside extreme usability idealism.
        </p>
      </div>
    </div>
  const conclusion = <Project title="5. Final Thoughts" content={conclusionContent} />

  return [
    meowWolf, aboutProject, researchAndInterview, problemStatement, ideate, visualIdentity, finalDesign, conclusion
  ]
}


export default ProjectsPage
