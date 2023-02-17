import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const About = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <p>
        HBOMax Redesign Challenge
      </p>
      <p><strong style={{ fontVariationSettings: "'wght' 700" }}>Why? Why do this?</strong></p>
      <p>
        This project is a design challenge to redesign the HBOMax app. I wanted to improve the overall user experience
        and solve problems for people.
      </p>
      <p>| <strong>PLATFORM:</strong> Mobile iOS</p>
      <p>| <strong>INDUSTRY:</strong> Video Streaming Service</p>
      <p>| <strong>LOCATION:</strong> San Francisco, CA</p>
      <p>| <strong>DURATION:</strong> 2 weeks</p>
      <p>| <strong>ROLES:</strong> Sole Product Designer</p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/hbo_max/about.png' text={text} />
    </Card>
  )
}

export default About
