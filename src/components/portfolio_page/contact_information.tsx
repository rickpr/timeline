import React from 'react'
import { IconBrandLinkedin } from '@tabler/icons-react'
import Typewriter from 'typewriter-effect'

import useIsMobile from 'hooks/use_is_mobile'

import BrandIcon from '../brand_icon'

const iconSize = 'min(40px, 8dvw)'

const ContactInformation = (): React.ReactElement | null => {
  const isMobile = useIsMobile()
  if (isMobile === null) return null

  const strings = [`Based\xa0in\xa0${isMobile ? 'SF' : 'San\xa0Francisco'},\xa0CA\xa0-\xa0Open\xa0to\xa0Work`]
  const typewriter = <Typewriter options={{ strings, autoStart: true, loop: true }} />

  return (
    <div className='contact-information'>
      <div className='title'>👋 Hi, I&apos;m Adalida Baca</div>
      <div className='glass icon-container'>
        <span style={{ marginLeft: '12px' }}>{typewriter}</span>
        <BrandIcon href='https://linkedin.com/in/adalidabaca' Icon={IconBrandLinkedin} size={iconSize} />
      </div>
      <h2 className='subtitle'>
        I design functional, human-centered products that solve user needs and drive business success by leveraging
        philosophical insights and technical communication expertise.
      </h2>
    </div>
  )
}

export default ContactInformation
