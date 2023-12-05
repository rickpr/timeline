import React, { useContext } from 'react'

import Logo from '../../logo'
import { ThemeContext } from 'theme_context'
import CaseStudyThemes from 'case_study_themes'

import RecentCaseStudy from './recent_case_study'

const caseStudyNames = Object.keys(CaseStudyThemes)
const numberOfCaseStudies = caseStudyNames.length
const modulus = (caseStudyIndex: number): number => (
  // Javascript's % operator doesn't wrap around to negative numbers
  ((caseStudyIndex % numberOfCaseStudies) + numberOfCaseStudies) % numberOfCaseStudies
)

const seeMoreOfMyWorkStyles = {
  fontSize: '12px',
  fontWeight: 600,
  color: '#9FA6A9'
}

const recentCaseStudiesStyle = {
  display: 'flex',
  gap: '30px',
  flexWrap: 'wrap' as const
}

const introStyles = {
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  justifyContent: 'center'
}

const introTextStyles = {
  display: 'flex',
  flexDirection: 'column' as const
}

const Footer = (): JSX.Element => {
  const { name } = useContext(ThemeContext)
  const currentCaseStudyIndex = caseStudyNames.findIndex(key => CaseStudyThemes[key].name === name)
  const previousCaseStudyName = caseStudyNames[modulus(currentCaseStudyIndex - 1)]
  const nextCaseStudyName = caseStudyNames[modulus(currentCaseStudyIndex + 1)]

  return (
    <div className='more-work'>
      <div className='footer-about-me'>
        <div className='footer-intro-and-contact-button'>
          <div style={introStyles}>
            <Logo />
            <div style={introTextStyles}>
              <strong>Adalida Baca</strong>
              <em>Product Designer</em>
            </div>
          </div>
          <div className='footer-contact-button-container'>
            <a className='footer-contact-button' href='mailto:adalida@adalida.design'>CONTACT</a>
          </div>
        </div>
      </div>
      <div className='more-case-studies'>
        <div style={seeMoreOfMyWorkStyles}>SEE MORE OF MY WORK:</div>
        <div style={recentCaseStudiesStyle}>
          <RecentCaseStudy caseStudyName={previousCaseStudyName} />
          <RecentCaseStudy caseStudyName={nextCaseStudyName} />
        </div>
      </div>
    </div>
  )
}

export default Footer
