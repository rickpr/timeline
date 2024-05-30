import React from 'react'

import ShapingCompanies from '../services/shaping_companies'
import FAQs from '../services/faqs'

import Degree from './degree'

const AboutPage = (): JSX.Element => {
  return (
    <div className='about-page'>
      <Degree />
      <ShapingCompanies />
      <FAQs />
    </div>
  )
}

export default AboutPage
