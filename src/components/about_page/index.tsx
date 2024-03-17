import React from 'react'

import SectionHeading from 'components/section_heading'
import useIsMobile from 'hooks/use_is_mobile'

import Page from '../page'

import BigChanges from './big_changes'
import Degree from './degree'
import NewMexicoGrown from './new_mexico_grown'
import Contact from './contact'

const AboutPage = (): JSX.Element => {
  const isMobile = useIsMobile() === true
  const headerStyle = { fontWeight: 600, fontSize: isMobile ? '1.25em' : '2em' }
  return (
    <Page>
      <SectionHeading title='My Story' />
      <div style={headerStyle}>
        I&apos;m energized by people. I learn from their stories.
      </div>
      <NewMexicoGrown />
      <Degree />
      <BigChanges />
      <Contact />
      <div style={{ minHeight: '1em' }} />
    </Page>
  )
}

export default AboutPage
