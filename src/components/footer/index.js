import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { faGithub, faLinkedinIn, faHackerrank } from '@fortawesome/free-brands-svg-icons'
import Icon from './icon'

const Footer = () =>
  <footer>
    <nav>
      <div className='footer-nav'>
        <div>
          Adalida Baca<br />
          <Icon href='https://github.com/adalidabaca' icon={faGithub} />
          <Icon href='https://linkedin.com/in/adalidabaca' icon={faLinkedinIn} />
          <Icon href='https://www.hackerrank.com/profile/adalida_baca' icon={faHackerrank} />
        </div>
        <div>
          <br />
          <span className='footer-icon'><StaticImage src='../../images/sun-moon.png' /></span>
        </div>
        <div>
          Ricardo Piro-Rael<br />
          <Icon href='https://github.com/rickpr' icon={faGithub} />
          <Icon href='https://linkedin.com/in/rickpr' icon={faLinkedinIn} />
          <Icon href='https://www.hackerrank.com/profile/fdisk87' icon={faHackerrank} />
        </div>
      </div>
    </nav>
  </footer>

export default Footer
