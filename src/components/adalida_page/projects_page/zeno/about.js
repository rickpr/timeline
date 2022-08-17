import React from 'react'

import AboutList from '../about_list'
import Card from '../card'
import MediaWithText from '../media_with_text'

import about from 'videos/zeno/about.mp4'

import 'sass/adalida_page/cyph.scss'

const About = () => {
  const points = {
    PLATFORM: 'Mobile iOS',
    INDUSTRY: 'E - Commerce',
    LOCATION: 'San Francisco, CA',
    DURATION: '1 month'
  }

  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <p>
        ZENO is a luxury e-commerce app designed for shoppers who enjoy luxury brands created by custom designers.
      </p>
      <p><strong style={{ fontVariationSettings: "'wght' 700" }}>Why? Why do this?</strong></p>
      <p>
        This project is a design challenge to create a hi-fidelity prototype in Figma. The challenge was to focus on a user interface and the interaction design between frames.
      </p>

      <AboutList points={points} />
    </div>
  )

  const titles = [
    'Product Designer',
    'User Testing',
    'UX Researcher',
    'Interaction Designer',
    'UI Designer'
  ]
  const roles = (
    <div style={{
      gridColumn: '1 / -1',
      marginTop: '1.5em',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      placeContent: 'space-between center',
      placeItems: 'center center'
    }}>
      <h1>{'//'} ROLES</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', placeContent: 'space-between', width: '100%' }}>
        {titles.map(title => <li key={title}>{title}</li>)}
      </div>
    </div>
  )

  return (
    <Card title='// ABOUT THE PROJECT'>
      <MediaWithText media={about} text={text} />
      {roles}
    </Card>
  )
}

export default About
