import React from 'react'
import Carousel from '../carousel'

const TimelinePost = ({ carousel }) =>
  <div className="col-sm-5" data-aos="fade-up" style={{ zIndex: 1 }}>
    <div className="bg-dark timeline-post">
      <Carousel className="card-img" carousel={carousel} />
    </div>
  </div>

export default TimelinePost
