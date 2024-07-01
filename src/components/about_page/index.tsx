import React from 'react'

import About from './about'
import Interests from './interests'
import Services from './services'
import ValueIBring from './value_i_bring'

const AboutPage = (): JSX.Element => {
  return (
    <div className='about-page'>
      <About/>
      <Services />
      <ValueIBring />
      <Interests />
    </div>
  )
}

export default AboutPage
