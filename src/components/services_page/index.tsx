import React from 'react'

import ShapingCompanies from '../services/shaping_companies'
import FAQs from '../services/faqs'
import MyProcess from './my_process'
import MyPastWork from './my_past_work'

const ServicesPage = (): JSX.Element => {
  return (
    <>
      <ShapingCompanies/>
      <MyProcess />
      <MyPastWork />
      <FAQs />
    </>
  )
}

export default ServicesPage
