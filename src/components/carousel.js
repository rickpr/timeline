import React from 'react'
import CarouselImage from './carousel_image'

const Carousel = ({ carousel }) =>
  <div className="carousel slide" data-ride="carousel" id={`carousel_${carousel.id}`}>
    <div className="carousel-inner">
      {carousel.images.map((image, index) => <CarouselImage key={image.id} first={!index} {...image} />)}
    </div>
    <a className="carousel-control-prev" href={`#carousel_${carousel.id}`} role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href={`#carousel_${carousel.id}`} role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

export default Carousel
