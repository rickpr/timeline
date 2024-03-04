import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { IconBrandGithub, IconBrandLinkedin, IconTerminal2 } from '@tabler/icons-react'

const footerStyle = {
  display: 'flex',
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  justifyContent: 'space-around',
  textAlign: 'center' as const,
  width: '100%',
  margin: 0
}

const Footer = (): JSX.Element =>
  <footer>
    <nav style={footerStyle}>
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
        <span><StaticImage src='../images/sun-moon.png' alt='Adalida and Ricardo' /></span>
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
