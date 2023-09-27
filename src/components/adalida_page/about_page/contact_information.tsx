import React from 'react'
import { IconBrandDribbble, IconBrandLinkedin, IconExternalLink, IconMail } from '@tabler/icons-react'
import Typewriter from 'typewriter-effect'

import useIsMobile from 'hooks/use_is_mobile'
import FileQuery from 'queries/file'

import Card from '../projects/card'
import BrandIcon from '../brand_icon'
import { glassStyles } from '../styles'
import { boxShadow } from './styles'
import BoxDesign from './box_design'

import 'sass/adalida_page/index.scss'

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column' as const,
  width: '100%',
  maxWidth: '100dvw',
  rowGap: '2em'
}

const iconContainerStyles = {
  ...glassStyles,
  width: '100%',
  display: 'flex',
  padding: '10px',
  minWidth: '310px',
  maxWidth: '1000px',
  margin: '0 auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 'min(1.5em, 3.5dvw)',
  boxShadow,
  fontWeight: 300
}

const ContactInformation = (): React.ReactElement => {
  const resumeLink = FileQuery('Adalida_Baca_Resume.pdf').publicURL

  const isMobile = useIsMobile() === true

  const strings = [`Based\xa0in\xa0${isMobile ? 'SF' : 'San\xa0Francisco'},\xa0CA`]
  const typewriter = (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true
      }}
    />
  )

  return (
    <div style={styles}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Adalida Baca</h2>
        <h2 style={{ fontWeight: 300, margin: 0 }}>Product Designer</h2>
        <a
          style={{ margin: 0, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '1ch' }}
          href={resumeLink}
          target='_blank'
          rel='noreferrer'
        >
          Resume <IconExternalLink size={16} />
        </a>
        <div style={{ height: '45dvh' }}><BoxDesign /></div>
      </div>
      <Card>
        <div style={iconContainerStyles}>
          <span style={{ marginLeft: '16px' }}>{typewriter}</span>
          <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
            <BrandIcon href='https://dribbble.com/adalida-baca' Icon={IconBrandDribbble} />
            <BrandIcon href='https://linkedin.com/in/adalidabaca' Icon={IconBrandLinkedin} />
            <BrandIcon href="mailto:adalida@adalida.design" Icon={IconMail} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ContactInformation
