import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const About = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; ABOUT</h3>
      <p>
        This project was for a professional cleaner in Albuquerque,
        who needed a simple website to advertise her cleaning business to
        current, prospective, and future clients. The website aimed to offer
        quick access to information about the services provided, as well as a
        way for clients to schedule appointments for a free quote. The website
        was also intended to showcase pictures and testimonials of the
        cleaner&apos;s previous work and background. The target audience for the
        website was potential and current clients.
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
