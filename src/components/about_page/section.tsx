import React from 'react'

import LetsWorkTogether from 'components/lets_work_together'
import SectionHeading from 'components/section_heading'

interface Props {
  title: string
  children: React.ReactNode
}

const Services = ({ title, children }: Props): JSX.Element => {
  return (
    <div>
      <SectionHeading title={title} />
      {children}
      <div className='pull-right'><LetsWorkTogether /></div>
    </div>
  )
}

export default Services
