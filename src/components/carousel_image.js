import React from 'react'

const CarouselImage = ({ first, imageUrl, altText }) =>
  <div className={`carousel-item ${first && 'active'}`}>
    <img className="d-block w-100" src={imageUrl} alt={altText} />
  </div>

export default CarouselImage
