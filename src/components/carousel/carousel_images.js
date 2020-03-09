import React from 'react'

const CarouselImages = ({ images }) =>
  <div className="carousel-inner">
    {images.map(({ id, imageUrl, altText }, index) =>
      <div key={id} className={`carousel-item ${index || 'active'}`}>
        <img className="d-block w-100" src={imageUrl} alt={altText} />
      </div>
    )}
  </div>

export default CarouselImages
