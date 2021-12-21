import React from 'react'

const CarouselArrow = ({ direction, carouselId }) => {
  const humanize = { prev: 'Previous', next: 'next' }
  return (
    <button
      className={'carousel-control-' + direction}
      data-bs-target={`#carousel_${carouselId}`}
      type='button'
      data-bs-slide={direction}
    >
      <span className={`carousel-control-${direction}-icon`} aria-hidden='true' />
      <span className='sr-only'>{humanize[direction]}</span>
    </button>
  )
}

export default CarouselArrow
