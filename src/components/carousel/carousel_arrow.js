import React from 'react'

const CarouselArrow = ({ direction, carouselId }) => {
  const humanize = { prev: 'Previous', next: 'next' }
  return (
    <a
      className={'carousel-control-' + direction}
      href={`#carousel_${carouselId}`}
      role="button"
      data-slide={direction}
    >
      <span className={`carousel-control-${direction}-icon`} aria-hidden="true"></span>
      <span className="sr-only">{humanize[direction]}</span>
    </a>
  )
}

export default CarouselArrow
