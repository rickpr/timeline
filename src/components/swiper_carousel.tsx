import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ThemeContext } from 'theme_context'

import Image from 'components/image'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'sass/swiper_carousel.scss'

// This has to be imported last
// @ts-expect-error this isn't getting the types
import { EffectCoverflow, Pagination, Navigation } from 'swiper'

const SwiperCarousel = ({ images }: { images: string[] }): JSX.Element => {
  const { name } = useContext(ThemeContext)
  return (
    <Swiper
      coverflowEffect={{}}
      centeredSlides
      effect='coverflow'
      grabCursor
      loop
      loopedSlides={images.length}
      modules={[EffectCoverflow, Pagination, Navigation]}
      navigation
      pagination={{ bulletActiveClass: `swiper-pagination-bullet-active-${name}` }}
      slidesPerView={1.42}
      watchSlidesProgress
    >
      {images.map((image, index) =>
        <SwiperSlide key={`${image}-${index}`}>
          <Image path={image} alt={image} />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default SwiperCarousel
