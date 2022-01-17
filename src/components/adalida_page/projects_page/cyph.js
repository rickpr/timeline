import React, { useRef } from 'react'

import ColorCircle from './color_circle'
import Project from './project'
import TimelineDescription from 'components/timeline/timeline_description'
import CaptionGallery from 'components/caption_gallery'
import Title from './title'

import useSynchronizedTypewriter from 'hooks/use_synchronized_typewriter'

// Image
import architecture from 'images/architecture.png'
import cyph from 'images/cyph.png'
import personas from 'images/personas.svg'
import personasOne from 'images/personas_one.svg'
import userJourneyMap1 from 'images/user_journey_map_1.svg'
import userJourneyMap2 from 'images/user_journey_map_2.svg'

// Video
import beforeLoFi from 'videos/before_lo_fi.mp4'
import afterHiFi from 'videos/after_hi_fi.mp4'

const Cyph = () => {
  const contentStart = useRef()
  const title = (
    <Title title='Cyph' image={cyph} scrollTarget={contentStart} />
  )

  const projectInfo = (
    <>
      <h2 style={{ color: '#7D21E1' }}>ROLES</h2>
      <ul className='roles-list'>
        <li>Product Designer</li>
        <li>UX/UI Designer</li>
        <li>UX Researcher</li>
        <li>Prototyping</li>
        <li>User Testing</li>
      </ul>
      <h2 style={{ color: '#7D21E1' }}>DURATION</h2>
      <ul className='roles-list'>
        <li>Oct 2021 - Nov 2020</li>
      </ul>
      <h2 style={{ color: '#7D21E1' }}>MEDIUM</h2>
      <ul className='roles-list'>
        <li>Mobile App</li>
      </ul>
    </>
  )
  const aboutProjectContent = (
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'min-content 1fr', columnGap: '10%' }}
    >
      <div className='large-text'>
        <div className='large' style={{ color: '#7D21E1' }}>Origin</div>
        <p>
          Cyph is a mobile app designed for users who are intersted in contributions and
          spending between elected representatives and businesses.
          Users can scan a person and an AI will recoginize who the representative is and who their donors are.
        </p>
        <p>
          This project is a design challenge based from a meme containing a quote by Robin Williams:
          “Politicans should wear sponser jackets like nascar drivers, then we know who owns them”.
        </p>
      </div>
      <div>
        <TimelineDescription description={projectInfo} />
      </div>
    </div>
  )
  const aboutProject = <Project forwardRef={contentStart} title='ABOUT THE PROJECT' content={aboutProjectContent} />

  const researchContent = (
    <>
      <div className='large-text'>
        <div className='large' style={{ color: '#7D21E1' }}>Research</div>
        <p>
          My research focused on how voting works in the United States, why people don’t vote,
          what information is useful to voters, why voting is important.
          After, I conducted a competitive audit and learned about useful data sources publicly available for use.
          This is also where I begin creating my information architecture.
        </p>
      </div>
      <CaptionGallery
        photos={[architecture, userJourneyMap1, userJourneyMap2]}
        caption='User Persona 1'
        id="researchContent"
      />
    </>
  )

  const interviewContent = (
    <>
      <CaptionGallery photos={[personas, personasOne]} caption='User Personas' id="interviewContent" />
      <div key='text' className='large-text'>
        <h1>2. Empathize</h1>
        <div className='large' style={{ color: '#7D21E1' }}>Interviews</div>
        <p>
          The target audience was a young voter demographic who are bewteen the ages of 20-35.
          I utilized my network and interviewed people who fit the target audience.
          In doing so, I was able to to build empathy and begin finding pain points.
        </p>
      </div>
    </>
  )
  const researchAndInterviewContent = (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'min-content min-content 1fr',
      columnGap: '15vw',
      rowGap: '1em',
      minHeight: '100vh'
    }}
    >
      {researchContent}
      {interviewContent}
      <div />
    </div>
  )
  const researchAndInterview = <Project title='1. Understand' content={researchAndInterviewContent} />

  const problemStatementContent = (
    <div style={{ display: 'grid', minHeight: '100vh' }}>
      <div className='large-text'>
        <div className='large' style={{ color: '#7D21E1' }}>Problem</div>
        <p>
          Mark is a young eligible voter who needs to learn about their representatives because they are interested
          in voting in the next election.
        </p>
      </div>
    </div>
  )
  const problemStatement = <Project title='3. Define' content={problemStatementContent} />

  const videoContainerStyle = {
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '5em 0',
    backgroundColor: '#000000',
    gridTemplateRows: '8fr 1fr',
    gridTemplateColumns: '1fr'
  }
  const ideateContent = (
    <div className='large-text'>
      <div className='large' style={{ color: '#7D21E1' }}>Design, Prototype, Test</div>
      <p>
        I began my process desiging in high fidelity and conducted usability and a/b testing to enhance and stregthen
        the designs.
        Here is my design and iteration process for the pop up portfolio page for an example politican.
        The end goal was to visualize the data from the table in example 1 in a meaningful way and remove any
        unneccessary information. Here is the process and result.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(calc(280px + 5em), 1fr))' }}>
        <div style={videoContainerStyle}>
          <video src={beforeLoFi} type='video/mp4' autoPlay style={{ margin: '0 auto' }} />
          <div style={{ textAlign: 'center', color: '#FFFFFF' }}>Before Video</div>
        </div>
        <div style={videoContainerStyle}>
          <video src={afterHiFi} type='video/mp4' autoPlay style={{ margin: '0 auto' }} />
          <div style={{ textAlign: 'center', color: '#FFFFFF' }}>After Video</div>
        </div>
      </div>
    </div>
  )
  const ideate = <Project title='4. Ideate' content={ideateContent} />

  const visualIdentityRowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1em',
    marginBottom: '2em'
  }

  const SynchronizedTypewriter = useSynchronizedTypewriter()
  const typography = (
    <h1 style={{
      fontWeight: '400',
      fontFamily: 'Avenir Next',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(12em, 1fr))',
      justifyContent: 'space-between'
    }}
    >
      <SynchronizedTypewriter string='Avenir Next' />
      <SynchronizedTypewriter string='Aa Bb Cc Dd' />
      <SynchronizedTypewriter string='0123456789' />
    </h1>
  )
  const visualIdentityContent = (
    <div className='large-text'>
      <div className='large' style={{ color: '#7D21E1' }}>Primary Colors</div>
      <div style={visualIdentityRowStyle}>
        <ColorCircle color='#000000' /> <ColorCircle color='#EC0089' /> <ColorCircle color='#000000' />
      </div>
      <div className='large' style={{ color: '#7D21E1' }}>Secondary Colors</div>
      <div style={visualIdentityRowStyle}>
        <ColorCircle color='#C4C4C4' /> <ColorCircle color='#00A0CC' /> <ColorCircle color='#FFFFFF' />
      </div>
      <div className='large' style={{ color: '#7D21E1' }}>Typography</div>
      {typography}
    </div>
  )
  const visualIdentity = <Project title='Defining the Visual Identity' content={visualIdentityContent} />

  const finalDesignContent = (
    <div className='large-text'>
      <p>Check out my final design!</p>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', float: 'left', height: 0 }}>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', height: '100%', position: 'absolute', left: 0 }}
          width='800'
          height='450'
          src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXpElv0YPDIcTaVNFt6UTMh%2FCivic%3Fpage-id%3D2%253A2%26node-id%3D722%253A6109%26viewport%3D407%252C48%252C0.86%26scaling%3Dscale-down%26starting-point-node-id%3D722%253A6109'
          allowFullScreen
        />
      </div>
    </div>
  )
  const finalDesign = <Project title='5. Solution' content={finalDesignContent} />

  const conclusionContent = (
    <div className='large-text'>
      <div className='large' style={{ color: '#7D21E1' }}>What I learned</div>
      <div style={{ minHeight: '2em ' }} />
      <p>
        The goal for this project was to give voters a tool to vote for a representative best alligned with their
        goals and interests.
        It was a unique oppurutinty to design and idea from scratch and turn it into a  product.
        I am thankful I had the oppurtunity to work on a project aimed at helping my community and is
        intended to promote social goodness.
      </p>
      <div style={{ minHeight: '2em ' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }} className='what-i-learned'>
        <h1>Visualizing Data Sets</h1>
        <p>
          Data sets are ripe with knowledge and information and they are best accompanied with filters and pictures.
        </p>
        <h1>New Domains</h1>
        <p>
          I learned a lot about how donor information is reported and how it is utilized by the
          Federal Elections Commission (FEC) who collects and checks this information for the public.
        </p>
        <h1>Political Language</h1>
        <p>
          During my research, I learned how language shapes how we think about problems.
          During my user research, many of my users were initimated or disliked the langauge surronding poltics today.
        </p>
        <h1>Starting From Scratch</h1>
        <p>
          Taking a new idea where there is not an existing model can be hard to design.
          Research, open source technology and information, iteration, and testing each are vital
          to the success for desiging nothing into something.
        </p>
      </div>
    </div>
  )
  const conclusion = <Project title='5. Final Thoughts' content={conclusionContent} />

  return [
    title, aboutProject, researchAndInterview, problemStatement, ideate, visualIdentity, finalDesign, conclusion
  ]
}

export default Cyph
