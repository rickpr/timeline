import React from 'react'
import Carousel from '../carousel'

const TimelinePost = ({ carousel, description, title }) => {
  const carouselCard =
      <div className="col-sm-5" data-aos="fade-up" style={{ zIndex: 1 }}>
        <div className="bg-dark timeline-post">
          <Carousel className="card-img" carousel={carousel} />
        </div>
      </div>

  const descriptionCard =
        <div className="col-sm-5" data-aos="fade-up" style={{ zIndex: 1 }}>
          <div className="card timeline-description">
            <div style={{border: '5px solid black', position: 'absolute', top: '15px', left: '15px', zIndex: -1, width: '100%', height: '100%'}}>
            </div>
            <div className="card-header timeline-description-header">
              {title}
            </div>
            <div className="card-body timeline-description-body">
              {description}
            </div>
          </div>
        </div>

  return [carouselCard, descriptionCard]
}

export default TimelinePost
