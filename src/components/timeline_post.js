import React from 'react'
import Carousel from './carousel'

const TimelinePost = ({ title, description, carousel }) =>
  <div className="col-sm-5" data-aos="fade-up" style={{ zIndex: 1 }}>
    <div className="card bg-dark timeline-post">
      <Carousel className="card-img" carousel={carousel} />
      <div className="card-img-overlay">
        <h5 className="card-title outlined-text">{title}</h5>
        <p className="card-text outlined-text">{description}</p>
      </div>
    </div>
  </div>

export default TimelinePost
