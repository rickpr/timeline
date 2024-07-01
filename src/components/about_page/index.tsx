import React from 'react'

import Background from './background'
import ContactInformation from './contact_information'
import Interests from './interests'
import Services from './services'

const AboutPage = (): JSX.Element => {
  return (
    <div className='about-page'>
      <ContactInformation />
      <Background />
      <Services />
      <Interests />
    </div>
  )
}

export default AboutPage
