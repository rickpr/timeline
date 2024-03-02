import React from 'react'

import SectionHeading from 'components/adalida_page/section_heading'

import Page from '../page'
import Build from './build'
import Services from './services'
import MyProcess from './my_process'
import MyPastWork from './my_past_work'

const ServicesPage = (): JSX.Element => {
  return (
    <Page>
      <div style={{ fontSize: '2.25em', fontWeight: '800', margin: 'auto' }}>SERVICES</div>
      <Build />
      <SectionHeading title='Services' />
      <div style={{ fontWeight: 600, fontSize: '2.25em' }}>Shaping startups, one interaction at a time.</div>
      <Services />
      <SectionHeading title='My Process' />
      <MyProcess />
      <SectionHeading title='My Past Work' />
      <MyPastWork />
    </Page>
  )
}

export default ServicesPage
