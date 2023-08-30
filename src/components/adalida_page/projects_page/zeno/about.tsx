import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import about from 'videos/zeno/about.mp4'

import 'sass/adalida_page/project.scss'

const About = (): JSX.Element => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <p>
        ZENO is a luxury e-commerce app designed for shoppers who enjoy luxury brands created by custom designers.
      </p>
      <p><strong style={{ fontVariationSettings: "'wght' 700" }}>Why? Why do this?</strong></p>
      <p>
        This project is a design challenge to create a hi-fidelity prototype in Figma. The challenge was to focus on a user interface and the interaction design between frames.
      </p>
      <p>| <strong>PLATFORM:</strong> Mobile iOS</p>
      <p>| <strong>INDUSTRY:</strong> E-Commerce</p>
      <p>| <strong>LOCATION:</strong> San Francisco, CA</p>
      <p>| <strong>DURATION:</strong> 1 month</p>
      <p>| <strong>ROLES:</strong> Sole Product Designer</p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media={about} text={text} style={{ borderRadius: '7vh' }} />
    </Card>
  )
}

export default About
