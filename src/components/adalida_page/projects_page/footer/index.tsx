import React, { useContext } from 'react'

import AdalidaFace from 'images/adalida_face.jpg'
import { ThemeContext, Projects } from 'theme_context'

import RecentProject from './recent_project'

const projectNames = Object.keys(Projects)
const numberOfProjects = projectNames.length
const modulus = (projectIndex: number): number => (
  // Javascript's % operator doesn't wrap around to negative numbers
  ((projectIndex % numberOfProjects) + numberOfProjects) % numberOfProjects
)

const seeMoreOfMyWorkStyles = {
  fontSize: '12px',
  fontWeight: 600,
  color: '#9FA6A9'
}

const recentProjectsStyle = {
  display: 'flex',
  gap: '30px',
  flexWrap: 'wrap' as const
}

const Footer = (): JSX.Element => {
  const { name } = useContext(ThemeContext)
  const currentProjectIndex = projectNames.findIndex(key => Projects[key].name === name)
  const previousProjectName = projectNames[modulus(currentProjectIndex - 1)]
  const nextProjectName = projectNames[modulus(currentProjectIndex + 1)]

  return (
    <div className='more-work'>
      <div className='footer-about-me'>
        <div className='footer-intro-and-contact-button'>
          <div className='footer-intro'>
            <img alt="Adalida Portrait" src={AdalidaFace} className='footer-portrait' />
            <div className='footer-intro-text'>
              <strong>Adalida Baca</strong>
              <em>Digital Product Designer</em>
            </div>
          </div>
          <div className='footer-contact-button-container'>
            <a className='footer-contact-button' href='mailto:adalida@adalida.design'>CONTACT</a>
          </div>
        </div>
      </div>
      <div className='more-projects'>
        <div style={seeMoreOfMyWorkStyles}>SEE MORE OF MY WORK:</div>
        <div style={recentProjectsStyle}>
          <RecentProject projectName={previousProjectName} />
          <RecentProject projectName={nextProjectName} />
        </div>
      </div>
    </div>
  )
}

export default Footer
