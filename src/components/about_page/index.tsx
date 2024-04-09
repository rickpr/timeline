import React from 'react'

import ShapingCompanies from '../services/shaping_companies'
import FAQs from '../services/faqs'

import Degree from './degree'
import Transplant from './transplant'

const AboutPage = (): JSX.Element => {
  return (
    <>
      <Degree />
      <Transplant />
      <ShapingCompanies />
      <FAQs />
    </>
  )
}

export default AboutPage
