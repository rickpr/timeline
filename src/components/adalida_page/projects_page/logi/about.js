import React from 'react'

import AboutList from '../about_list'
import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/cyph.scss'

const About = () => {
  const points = {
    PLATFORM: 'Desktop',
    INDUSTRY: 'Logistics',
    LOCATION: 'Austin, TX',
    DURATION: '1 week'
  }

  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <p>
      This is a dashboard focused on shipping and logistics.
      </p>
      <p><strong style={{ fontVariationSettings: "'wght' 700" }}>Why? Why do this?</strong></p>
      <p>
      The challenge with this project was to create a hi-fidelity design from two different design systems. The first design system is  base for my wireframe and layout. The second design system is the base for my color design system.
      </p>

      <AboutList points={points} />
    </div>
  )

  const titles = [
    'Product Designer',
    'UI Designer',
    'UX Designer'
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
      <MediaWithText media='images/logi/about.png' text={text} />
      {roles}
    </Card>
  )
}

export default About
