import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const About = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; ABOUT</h3>
      <p>
        I recently completed a web design project for a professional cleaner in
        Albuquerque. The project lasted three weeks and aimed to create a simple
        website to showcase the cleaner&apos;s services and enable clients to
        schedule appointments for a free quote. The website was intended to
        appeal to current, prospective, and future clients, and showcase the
        cleaner&apos;s previous work and background.
      </p>
      <p>| <strong>TIMELINE:</strong> 3 weeks</p>
      <p>| <strong>TEAM:</strong> 1 Product Designer, 1 Translator</p>
      <p>| <strong>ROLES:</strong> Sole Product Designer</p>
      <p>|
        <a href="https://www.zarascleaning.com/" target="_blank" rel="noreferrer">
          <strong> Visit</strong>
        </a>
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zaras_cleaning/about.png' text={text} />
    </Card>
  )
}

export default About
