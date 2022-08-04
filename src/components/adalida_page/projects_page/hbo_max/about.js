import React from 'react'

import AboutList from '../about_list'
import Card from '../card'
import MediaWithText from '../media_with_text'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/cyph.scss'

const About = () => {
  const points = {
    PLATFORM: 'Mobile iOS',
    INDUSTRY: 'Video Streaming Service',
    LOCATION: 'San Francisco, CA',
    DURATION: '2 weeks'
  }

  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <p>
        HBOMax Redesign Challenge

      </p>
      <p><strong style={{ fontVariationSettings: "'wght' 700" }}>Why? Why do this?</strong></p>
      <p>
        This project is a design challenge to redesign the HBOMax app. I wanted to improve the overall user experience
        and solve problems for people. I
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
  const sizeOfLargestRole = Math.max(...titles.map(title => title.length)) + 3
  const rolesBreakpoint = 1.2 * sizeOfLargestRole + 'ch'
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
      <ResponsiveGrid breakpoint={rolesBreakpoint}>
        {titles.map(title => <li key={title}>{title}</li>)}
      </ResponsiveGrid>
    </div>
  )

  return (
    <Card title='// ABOUT THE PROJECT'>
      <MediaWithText media='images/hbo_max/about.png' text={text} />
      {roles}
    </Card>
  )
}

export default About
