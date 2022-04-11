import PropTypes from 'prop-types'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'components/image'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'sass/swiper_carousel.scss'

// This has to be imported last
import { EffectCoverflow, Pagination, Navigation } from 'swiper'

const SwiperCarousel = ({ images }) =>
  <Swiper
    coverflowEffect={{
      depth: 1500,
      rotate: 0,
      scale: 1.5
    }}
    centeredSlides
    effect='coverflow'
    grabCursor
    loop
    loopedSlides={images.length}
    modules={[EffectCoverflow, Pagination, Navigation]}
    navigation
    pagination
    slidesPerView={1.42}
    watchSlidesProgress
  >
    {images.map((image, index) =>
      <SwiperSlide key={`${image}-${index}`}>
        <Image path={image} />
      </SwiperSlide>
    )}
  </Swiper>

SwiperCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SwiperCarousel
