import React, { useState } from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import CarouselOverlay, { carouselMediaTag } from '../../carousel_overlay'
import CaseStudy from '../case_study'
import ImageCard from '../../image_card'
import About from './about'

const InformationArchitecture = 'images/phronesis/info_arch.png'
const Logo = 'images/phronesis/logo.png'
const AppIcon = 'images/phronesis/app_icon.png'
const Text = 'images/phronesis/text.png'
const Color = 'images/phronesis/color.png'
const FinalLogo = 'images/phronesis/final_logo.png'
const FinalImage = 'images/phronesis/final_image.webp'
const ComponentsDarkAndLight = 'images/phronesis/components_dark_light.webp'
const SpecsTable = 'images/phronesis/specs_table.png'
const Specs = 'images/phronesis/specs.png'
const PhotosOne = 'images/phronesis/photos_one.png'
const PhotosTwo = 'images/phronesis/photos_two.webp'

const containerStyle = {
  minWidth: '95%',
  maxWidth: '95dvw',
  margin: '0 2.5dvw',
  minHeight: '400px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  alignItems: 'center',
  justifyContent: 'space-around'
}

const cardStyle = {
  cursor: 'pointer',
  minHeight: '300px',
  borderRadius: '2dvmax',
  overflow: 'hidden'
}

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
    <div key={index} style={containerStyle}>
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
            <ImageCard media={image} style={cardStyle} />
          </div>
        )
      })}
    </div>
  )

  return (
    <CaseStudy>
      <About />
      {images}
      {showCarousel && <CarouselOverlay dismiss={dismiss} media={carouselMedia} index={mediaIndex} />}
    </CaseStudy>
  )
}

export default Phronesis
