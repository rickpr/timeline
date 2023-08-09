import React from 'react'
import { IconBrandDribbble, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import Typewriter from 'typewriter-effect'

import BrandIcon from '../brand_icon'

import 'sass/adalida_page/index.scss'

import AdalidaFace from 'images/adalida_face.jpg'

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column' as const,
  width: '100%',
  maxWidth: '100dvw'
}

const ContactInformation = (): React.ReactElement => {
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
      <p style={{ padding: '0 1em' }}>
        Hello, I&apos;m an enthusiastic Product Designer in the Bay Area.
        Welcome to my portfolio! I specialize in {typewriter}
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <BrandIcon href='https://dribbble.com/adalida-baca' icon={<IconBrandDribbble />} />
        <BrandIcon href='https://linkedin.com/in/adalidabaca' icon={<IconBrandLinkedin />} />
        <BrandIcon href="mailto:adalida@adalida.design" icon={<IconMail />} />
      </div>
    </div>
  )
}

export default ContactInformation
