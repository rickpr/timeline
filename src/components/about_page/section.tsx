import React from 'react'

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
    </div>
  )
}

export default Services
