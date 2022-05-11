import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/cyph.scss'

const About = () => {
  const makeEntry = ([title, content]) => (
    <div
      key={title}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h2>// {title}</h2><ul><li>{content}</li></ul>
    </div>
  )

  const points = {
    PLATFORM: 'Mobile iOS',
    INDUSTRY: 'Video Streaming Service',
    LOCATION: 'San Francisco, CA',
    DURATION: '2 weeks'
  }
  // The length of the word plus the two slashes and space.
  const sizeOfLargestTitle = Math.max(...Object.keys(points).map(title => title.length)) + 3
  // 2.4 is a magic number, it should be 2 but probably also involves the font weight.
  const breakpoint = 2.4 * sizeOfLargestTitle + 'ch'

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

      <div>
        <ResponsiveGrid breakpoint={breakpoint}>
          {Object.entries(points).map(makeEntry)}
        </ResponsiveGrid>
      </div>
    </div>
  )

  // 2.4 is a magic number, it should be 2 but probably also involves the font weight.
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
    }}
    >
      <h1>// ROLES</h1>
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
