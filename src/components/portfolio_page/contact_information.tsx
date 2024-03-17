import React from 'react'
import { IconBackpack, IconBrandDribbble, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import Typewriter from 'typewriter-effect'

import useIsMobile from 'hooks/use_is_mobile'

import BrandIcon from '../brand_icon'

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column' as const,
  width: '100%',
  maxWidth: '100dvw',
  rowGap: '2em'
}

const iconContainerStyles = {
  width: '100%',
  display: 'flex',
  padding: '10px',
  maxWidth: '1000px',
  margin: '0 auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 'min(1.5em, 3.5dvw)',
  fontWeight: 300
}

const iconSize = 'min(40px, 8dvw)'

const ContactInformation = (): React.ReactElement => {
  const isMobile = useIsMobile() === true

  const strings = [`Based\xa0in\xa0${isMobile ? 'SF' : 'San\xa0Francisco'},\xa0CA`]
  const typewriter = <Typewriter options={{ strings, autoStart: true, loop: true }} />

  return (
    <div style={styles}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ fontSize: '36px', fontWeight: 800 }}>Adalida Baca</div>
        <div style={{ fontSize: '20px', textAlign: 'center' }}>Crafting Digital Dreams One Pixel at a Time</div>
        <div style={{ fontSize: '20px', fontWeight: 700 }}>Product Designer</div>
      </div>
      <div className='glass' style={iconContainerStyles}>
        <span style={{ marginLeft: '16px' }}>{typewriter}</span>
        <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
          <BrandIcon href='https://www.interaction-design.org/members/adalida-baca' Icon={IconBackpack} size={iconSize} />
          <BrandIcon href='https://dribbble.com/adalida-baca' Icon={IconBrandDribbble} size={iconSize} />
          <BrandIcon href='https://linkedin.com/in/adalidabaca' Icon={IconBrandLinkedin} size={iconSize} />
          <BrandIcon href="mailto:hi@adalida.design" Icon={IconMail} size={iconSize} />
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
