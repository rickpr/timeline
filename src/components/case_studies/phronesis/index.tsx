import React, { useState } from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import CarouselOverlay, { carouselMediaTag } from '../../carousel_overlay'
import Card from './card'
import About from './about'

const InformationArchitecture = 'images/phronesis/info_arch.webp'
const Logo = 'images/phronesis/logo.webp'
const AppIcon = 'images/phronesis/app_icon.webp'
const Text = 'images/phronesis/text.webp'
const Color = 'images/phronesis/color.webp'
const FinalLogo = 'images/phronesis/final_logo.webp'
const FinalImage = 'images/phronesis/final_image.webp'
const ComponentsDarkAndLight = 'images/phronesis/components_dark_light.webp'
const SpecsTable = 'images/phronesis/specs_table.webp'
const Specs = 'images/phronesis/specs.webp'
const PhotosOne = 'images/phronesis/photos_one.webp'
const PhotosTwo = 'images/phronesis/photos_two.webp'

const allImages = [
  [InformationArchitecture],
  [Logo, AppIcon],
  [Text, Color],
  [FinalLogo],
  [Specs, SpecsTable],
  [PhotosOne, ComponentsDarkAndLight],
  [PhotosTwo, FinalImage]
]

const carouselMedia = allImages.flat().map(carouselMediaTag)

const Phronesis = (): JSX.Element => {
  useAnimateOnScroll()
  const [showCarousel, setShowCarousel] = useState(false)
  const [mediaIndex, setMediaIndex] = useState(0)
  const dismiss = (): void => { setShowCarousel(false) }
  const displayCarousel = (index: number): void => {
    setMediaIndex(index)
    setShowCarousel(true)
  }

  let imageIndex = 0
  const images = allImages.map((imageGroup, index) =>
    <div key={index} className='phronesis-container'>
      {imageGroup.map((image: string) => {
        const currentIndex = imageIndex++
        return (
          <div
            key={image}
            style={{ padding: '20px' }}
            tabIndex={0}
            data-aos='fade-up'
            role='tab'
            onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && displayCarousel(currentIndex) }}
            onClick={() => { displayCarousel(currentIndex) }}
          >
            <Card media={image} />
          </div>
        )
      })}
    </div>
  )

  return (
    <>
      <About />
      {images}
      {showCarousel && <CarouselOverlay dismiss={dismiss} media={carouselMedia} index={mediaIndex} />}
    </>
  )
}

export default Phronesis
