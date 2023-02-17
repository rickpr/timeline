import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const About = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <p>
        This is a dashboard focused on shipping and logistics.
      </p>
      <p>
        <strong style={{ fontVariationSettings: "'wght' 700" }}>
          Why? Why do this?
        </strong>
      </p>
      <p>
        The challenge with this project was to create a hi-fidelity design from
        two different design systems. The first design system is  base for my
        wireframe and layout. The second design system is the base for my color
        design system.
      </p>
      <p>| <strong>PLATFORM:</strong> Desktop</p>
      <p>| <strong>INDUSTRY:</strong> Logistics</p>
      <p>| <strong>LOCATION:</strong> Austin, TX</p>
      <p>| <strong>DURATION:</strong> 1 week</p>
      <p>| <strong>ROLES:</strong> Sole Product Designer</p>
    </div>
  )

  return (
    <Card>
      <h1>&#47;&#47; ABOUT THE PROJECT</h1>
      <MediaWithText media='images/logi/about.png' text={text} />
    </Card>
  )
}

export default About
