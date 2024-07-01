import React from 'react'

import Background from './background'
import Interests from './interests'
import Intro from './intro'
import Services from './services'

const AboutPage = (): JSX.Element => {
  return (
    <div className='about-page'>
      <Intro />
      <Services />
      <Background />
      <Interests />
    </div>
  )
}

export default AboutPage
