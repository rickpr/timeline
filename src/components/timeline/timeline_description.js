import React from 'react'

const TimelineDescription = ({ description, title }) => {
  const cardHeader =
    <div className="card-header timeline-description-header">
      {title}
    </div>
  const cardBody =
    <div className="card-body timeline-description-body">
      {description}
    </div>

  return (
    <div className="card timeline-description">
      <div style={{border: '5px solid black', position: 'absolute', top: '15px', left: '15px', zIndex: -1, width: '100%', height: '100%'}}>
      </div>
      {title && cardHeader}
      {description && cardBody}
    </div>
  )
}

export default TimelineDescription
