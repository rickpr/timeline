import React from 'react'
import { IconBackpack, IconBrandDribbble, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import Typewriter from 'typewriter-effect'

import useIsMobile from 'hooks/use_is_mobile'

import BrandIcon from '../brand_icon'

const iconSize = 'min(40px, 8dvw)'

const ContactInformation = (): React.ReactElement => {
  const isMobile = useIsMobile() === true

  const strings = [`Based\xa0in\xa0${isMobile ? 'SF' : 'San\xa0Francisco'},\xa0CA`]
  const typewriter = <Typewriter options={{ strings, autoStart: true, loop: true }} />

  return (
    <div className='contact-information'>
      <div className='intro'>
        <div className='title'>Adalida Baca</div>
        <div className='subtitle'>Crafting Digital Dreams One Pixel at a Time</div>
        <div className='tagline'>Product Designer &mdash;&nbsp;{' '}
          <a className='link' href='mailto:hi@adalida.design'>Open to Work&nbsp; <div className='rotated-arrow' /></a>
        </div>
      </div>
      <div className='glass icon-container'>
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
