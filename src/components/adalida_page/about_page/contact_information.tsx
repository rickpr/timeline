import React from 'react'
import { IconBrandDribbble, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import Typewriter from 'typewriter-effect'

import AdalidaFace from 'images/adalida_face.jpg'
import useIsMobile from 'hooks/use_is_mobile'

import Card from '../projects/card'
import BrandIcon from '../brand_icon'
import { glassStyles } from '../styles'

import 'sass/adalida_page/index.scss'

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column' as const,
  width: '100%',
  maxWidth: '100dvw'
}

const iconContainerStyles = {
  ...glassStyles,
  width: '100%',
  display: 'flex',
  padding: '10px',
  minWidth: '325px',
  maxWidth: '1000px',
  margin: '0 auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Inconsolata',
  fontSize: 'min(1.5em, 3.5dvw)',
  boxShadow: '0px 4px 24px -1px rgba(254, 52, 126, 0.25)',
  fontWeight: 300
}

const ContactInformation = (): React.ReactElement => {
  const isMobile = useIsMobile() === true
  const typewriter = (
    <Typewriter
      options={{
        strings: [
          'product design.',
          'user interface design.',
          'interaction design.'
        ],
        autoStart: true,
        loop: true
      }}
    />
  )

  return (
    <div style={styles}>
      <img alt='Adalida Portrait' src={AdalidaFace} style={{ width: '100%', maxHeight: '45dvh', objectFit: 'contain' }} />
      <h2>Adalida Baca</h2>
      <Card fullHeight={false}>
        <div style={iconContainerStyles}>
          <span style={{ marginLeft: '16px' }}>Based in {isMobile ? 'SF' : 'San\xa0Francisco'},&nbsp;CA</span>
          <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
            <BrandIcon href='https://dribbble.com/adalida-baca' Icon={IconBrandDribbble} />
            <BrandIcon href='https://linkedin.com/in/adalidabaca' Icon={IconBrandLinkedin} />
            <BrandIcon href="mailto:adalida@adalida.design" Icon={IconMail} />
          </div>
        </div>
      </Card>
      <p style={{ padding: '0 1em' }}>
        Hello, I&apos;m an enthusiastic Product Designer in the Bay Area.
        Welcome to my portfolio! I specialize in {typewriter}
      </p>
    </div>
  )
}

export default ContactInformation
