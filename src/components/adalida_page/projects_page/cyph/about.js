import React from 'react'

import AboutList from '../about_list'
import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/cyph.scss'

const About = () => {
  const points = {
    PLATFORM: 'Mobile iOS',
    INDUSTRY: 'Political Technology',
    LOCATION: 'San Francisco, CA',
    DURATION: '2 months'
  }

  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <p>
        Cyph is a mobile app designed for voters who are interested in contributions and spending between elected
        representatives and their donors.

        Voters can scan a person or politician and Cyph will recognize who the representative is and provide information
        on their political career and donor history.
      </p>
      <p><strong style={{ fontVariationSettings: "'wght' 700" }}>Why? Why do this?</strong></p>
      <p>
        This project is a challenge to design a solution for social good. The problem I wanted to contribute to solving was an increase in voter turnout for all
        demographics and to help voters vote for what is in <em>their</em> best interest.
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
      <MediaWithText media='images/cyph/summary.png' text={text} />
      {roles}
    </Card>
  )
}

export default About
