import React from 'react'

const TimelineDescription = ({ description, title }) => {
  const cardHeader = (
    <div className='card-header timeline-description-header'>
      {title}
    </div>
  )
  const cardBody = (
    <div className='card-body timeline-description-body'>
      {description}
    </div>
  )

  return (
    <div className='card timeline-description'>
      <div className='timeline-description-border' />
      {title && cardHeader}
      {description && cardBody}
    </div>
  )
}

export default TimelineDescription
