import React from 'react'
import CarouselImages from './carousel_images'
import CarouselArrow from './carousel_arrow'

const Carousel = ({ carousel }) =>
  <div className='carousel carousel-dark slide' data-ride='carousel' id={`carousel_${carousel.id}`}>
    <CarouselImages images={carousel.images} />
    <CarouselArrow direction='prev' carouselId={carousel.id} />
    <CarouselArrow direction='next' carouselId={carousel.id} />
  </div>

export default Carousel
