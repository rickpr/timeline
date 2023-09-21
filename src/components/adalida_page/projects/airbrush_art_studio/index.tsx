import React, { useState } from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import CarouselOverlay from '../../carousel_overlay'
import Project from '../project'
import ImageCard from '../../image_card'
import About from './about'

import 'sass/adalida_page/project.scss'

const Understanding = 'images/airbrush_art_studio/understanding.webp'
const Research = 'images/airbrush_art_studio/research.webp'
const ResearchClient = 'images/airbrush_art_studio/research_client.webp'
const InformationArchitecture = 'images/airbrush_art_studio/information_architecture.webp'
const Tools = 'images/airbrush_art_studio/tools.webp'
const Mockups = 'images/airbrush_art_studio/mockups.webp'
const ServicePage = 'images/airbrush_art_studio/service_page.webp'
const Responsively = 'images/airbrush_art_studio/responsively.webp'
const Splash = 'images/airbrush_art_studio/splash.webp'
const Publish = 'images/airbrush_art_studio/publish.webp'

const containerStyle = {
  minWidth: '95%',
  maxWidth: '95dvw',
  margin: '0 2.5dvw',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  alignItems: 'center',
  borderRadius: '2dvh',
  justifyContent: 'space-around'
}

const cardStyle = { cursor: 'pointer' }

const allImages = [
  Understanding,
  Research,
  ResearchClient,
  InformationArchitecture,
  Tools,
  Mockups,
  ServicePage,
  Responsively,
  Splash,
  Publish
]

const AirbrushArtStudio = (): JSX.Element => {
  useAnimateOnScroll()
  const [showCarousel, setShowCarousel] = useState(false)
  const [mediaIndex, setMediaIndex] = useState(0)
  const dismiss = (): void => { setShowCarousel(false) }

  const displayCarousel = (index: number): void => {
    setMediaIndex(index)
    setShowCarousel(true)
  }

  const images = allImages.map((image, index) =>
    <div
      key={image}
      style={containerStyle}
      role='tab'
      tabIndex={0}
      onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && displayCarousel(index) }}
      data-aos='fade-up'
      onClick={() => { displayCarousel(index) }}
    >
      <ImageCard media={image} style={cardStyle} />
    </div>
  )

  return (
    <Project>
      <About />
      {images}
      {showCarousel && <CarouselOverlay dismiss={dismiss} media={allImages} index={mediaIndex} />}
    </Project>
  )
}

export default AirbrushArtStudio
