import React from 'react'
import { IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import Typewriter from 'typewriter-effect'

import useIsMobile from 'hooks/use_is_mobile'

import BrandIcon from '../brand_icon'

const iconSize = 'min(40px, 8dvw)'

const ContactInformation = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  const strings = [`Based\xa0in\xa0${isMobile ? 'SF' : 'San\xa0Francisco'},\xa0CA`]
  const typewriter = <Typewriter options={{ strings, autoStart: true, loop: true }} />

  return (
    <div className='contact-information'>
      <div className='intro'>
        <div className='title'>Adalida Baca</div>
        <div className='subtitle'>Rubber Duck cosplaying as a Product Designer</div>
        <div className='tagline'>
          <span>Open to Work &mdash;</span>
          <span>Let&apos;s Connect</span>
          <BrandIcon href='mailto:hi@adalida.design' Icon={IconMail} size={iconSize} />
        </div>
      </div>
      <div className='glass icon-container'>
        <span style={{ marginLeft: '16px' }}>{typewriter}</span>
        <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
          <BrandIcon href='https://linkedin.com/in/adalidabaca' Icon={IconBrandLinkedin} size={iconSize} />
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
