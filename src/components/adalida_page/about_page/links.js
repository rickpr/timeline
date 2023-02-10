import { IconFileInfo, IconBrandDribbble, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import React from 'react'

import adalidaResume from 'documents/adalida_resume.pdf'

const Links = () =>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      width: '80%',
      margin: '0 auto'
    }}
  >
    <a
      href={adalidaResume}
      style={{ color: '#000000' }}
      target='_blank'
      rel='noreferrer'
    >
      <IconFileInfo />
    </a>
    <a
      href='https://dribbble.com/adalida-baca'
      style={{ color: '#000000' }}
      target='_blank'
      rel='noreferrer'
    >
      <IconBrandDribbble />
    </a>
    <a
      href='https://www.linkedin.com/in/adalidabaca'
      style={{ color: '#000000' }}
      target='_blank'
      rel='noreferrer'
    >
      <IconBrandLinkedin />
    </a>
    <a
      href='mailto:adalida@adalida.design'
      style={{ color: '#000000' }}
      target='_blank'
      rel='noreferrer'
    >
      <IconMail />
    </a>
  </div>

export default Links
