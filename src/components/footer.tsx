import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { IconBrandGithub, IconBrandLinkedin, IconTerminal2 } from '@tabler/icons-react'

import 'sass/footer.scss'

const Footer = () =>
  <footer>
    <nav className='footer-nav'>
      <div>
        Adalida Baca<br />
        <a href='https://github.com/adalidabaca' target='_blank' rel='noreferrer'>
          <IconBrandGithub />
        </a>
        <a href='https://linkedin.com/in/adalidabaca' target='_blank' rel='noreferrer'>
          <IconBrandLinkedin />
        </a>
        <a href='https://www.hackerrank.com/profile/adalida_baca' target='_blank' rel='noreferrer'>
          <IconTerminal2 />
        </a>
      </div>
      <div>
        <br />
        <span><StaticImage src='../images/sun-moon.png' /></span>
      </div>
      <div>
        Ricardo Piro-Rael<br />
        <a href='https://github.com/rickpr' target='_blank' rel='noreferrer'>
          <IconBrandGithub />
        </a>
        <a href='https://linkedin.com/in/rickpr' target='_blank' rel='noreferrer'>
          <IconBrandLinkedin />
        </a>
        <a href='https://www.hackerrank.com/profile/fdisk87' target='_blank' rel='noreferrer'>
          <IconTerminal2 />
        </a>
      </div>
    </nav>
  </footer>

export default Footer
