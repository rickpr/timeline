import React from 'react'

import AdalidaFace from 'images/adalida_face.jpg'
import ZenoTitle from 'images/zeno/title.jpg'
import ZarasCleaningTitle from 'images/zaras_cleaning/title.jpg'

const Footer = () => {
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
          <div className='recent-project'>
            <img
              alt="Zeno Project"
              src={ZenoTitle}
              className='recent-project-image'
            />
            <p>ZENO</p>
          </div>
          <div className='recent-project'>
            <img
              alt="Zara's Cleaning Project"
              src={ZarasCleaningTitle}
              className='recent-project-image'
            />
            <p>ZARA&apos;S CLEANING</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
