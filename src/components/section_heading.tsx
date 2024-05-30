import React from 'react'

const SectionHeading = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className='section-heading-container'>
      <h1>{title}</h1>
      <div className='section-heading-line' />
    </div>
  )
}

export default SectionHeading
