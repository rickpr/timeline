import React from 'react'

const TimelineDescription = ({ title, description }) =>
  <div className="col-sm-5" data-aos="fade-up" style={{ zIndex: 1 }}>
    <div className="card timeline-description">
      <div className="card-header timeline-description-header">
        {title}
      </div>
      <div className="card-body timeline-description-body">
        {description}
      </div>
    </div>
  </div>

export default TimelineDescription
