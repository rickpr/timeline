import React from 'react'
import Carousel from './carousel'

const TimelineDescription = ({ title, description, carousel }) =>
  <div className="col-sm-5" data-aos="fade-up" style={{ zIndex: 1 }}>
    <div className="card ">
      <div className="card-header">
        {title}
      </div>
      <div className="card-body">
        {description}
      </div>
    </div>
  </div>

export default TimelineDescription
