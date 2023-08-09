import React, { useContext } from 'react'

import AdalidaFace from 'images/adalida_face.jpg'
import { ThemeContext, Projects } from 'theme_context'

const projectNames = Object.keys(Projects)
const numberOfProjects = projectNames.length
const modulus = (projectIndex: number): number => (
  // Javascript's % operator doesn't wrap around to negative numbers
  ((projectIndex % numberOfProjects) + numberOfProjects) % numberOfProjects
)

const Footer = (): JSX.Element => {
  const { name } = useContext(ThemeContext)
  const currentProjectIndex = projectNames.findIndex(key => Projects[key].name === name)
  const previousProjectName = projectNames[modulus(currentProjectIndex - 1)]
  const nextProjectName = projectNames[modulus(currentProjectIndex + 1)]
  const recentProject = (projectName: string): JSX.Element => {
    const { name, coverPhoto, projectPage } = Projects[projectName]
    return (
      <a className='recent-project' href={projectPage}>
        <img
          alt={`${name} project`}
          src={coverPhoto}
          className='recent-project-image'
        />
        <p>{name}</p>
      </a>
    )
  }

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
        <div className='see-more-of-my-work'>
          SEE MORE OF MY WORK:
        </div>
        <div className='recent-projects'>
          {recentProject(previousProjectName)}
          {recentProject(nextProjectName)}
        </div>
      </div>
    </div>
  )
}

export default Footer
