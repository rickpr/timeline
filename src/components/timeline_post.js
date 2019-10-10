import React from 'react'
import Carousel from './carousel'

const TimelinePost = ({ title, description, carousel }) =>
  <div className="col-sm-5">
    <div className="card bg-dark" data-aos="fade-up" style={{ maxHeight: '150px', overflow: 'hidden', boxShadow: '5px 5px 9px 9px #888' }}>
      <Carousel className="card-img" carousel={carousel} />
      <div className="card-img-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>

export default TimelinePost
