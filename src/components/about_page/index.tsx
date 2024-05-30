import React from 'react'

import Degree from './degree'
import Interests from './interests'
import Services from './services'
import ValueIBring from './value_i_bring'

const AboutPage = (): JSX.Element => {
  return (
    <div className='about-page'>
      <Degree />
      <Services />
      <ValueIBring />
      <Interests />
    </div>
  )
}

export default AboutPage
