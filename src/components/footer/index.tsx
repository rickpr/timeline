import React from 'react'

import BuildTimeQuery from 'queries/build_time'
import Link from './link'

const Footer = (): JSX.Element => {
  const buildTime = BuildTimeQuery()
  return (
    <div className='footer'>
      <div className='footer-row'>
        <div className='footer-column'>
          <Link to='https://dribbble.com/adalida-baca' text='Dribbble' />
          <Link to='https://www.linkedin.com/in/adalidabaca/' text='LinkedIn' />
        </div>
        <div className='footer-column'>
          <Link to='mailto:hi@adalida.design' text='Email' />
          <Link to='https://aheavenlyread.notion.site/A-Heavenly-Read-dfe9351a7e204898a1451de826b3e812' text='Blog' />
        </div>
      </div>
      <div className='footer-row build-time'>
        Last updated: {buildTime}
      </div>
    </div>
  )
}

export default Footer
