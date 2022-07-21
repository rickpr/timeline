import PropTypes from 'prop-types'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

// This has to be imported last
import { Navigation } from 'swiper'

const Carousel = ({ carousel }) =>
  <Swiper
    centeredSlides
    grabCursor
    loop
    loopedSlides={carousel.images.length}
    modules={[Navigation]}
    navigation
  >
    {carousel.images.map(({ id, imageUrl, altText }) =>
      <SwiperSlide key={id} style={{ borderRadius: 0 }}>
        <img src={imageUrl} alt={altText} />
      </SwiperSlide>
    )}
  </Swiper>

Carousel.propTypes = {
  carousel: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        altText: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired
      })
    )
  })
}

export default Carousel
