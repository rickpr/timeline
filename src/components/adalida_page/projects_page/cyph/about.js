import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const About = () => {
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

      <p>| <strong>PLATFORM:</strong> Mobile iOS</p>
      <p>| <strong>INDUSTRY:</strong> Political Technology</p>
      <p>| <strong>LOCATION:</strong> San Francisco, CA</p>
      <p>| <strong>DURATION:</strong> 2 months</p>
      <p>| <strong>ROLES:</strong> Sole Product Designer</p>
    </div>
  )

  return (
    <Card title='// ABOUT THE PROJECT'>
      <h1>&#47;&#47; ABOUT THE PROJECT</h1>
      <MediaWithText media='images/cyph/summary.png' text={text} />
    </Card>
  )
}

export default About
