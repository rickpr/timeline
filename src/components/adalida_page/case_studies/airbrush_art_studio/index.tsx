import React, { useState } from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import HandoffSmallScreenVideo from 'videos/airbrush_art_studio/handoff_small_screen.mp4'
import HandoffLargeScreenVideo from 'videos/airbrush_art_studio/handoff_large_screen.mp4'
import HandoffVideo from 'videos/airbrush_art_studio/handoff.mp4'

import CarouselOverlay, { carouselMediaTag } from '../../carousel_overlay'
import ImageCard from '../../image_card'
import EmbeddedVideo, { type EmbeddedVideoProps } from '../embedded_video'
import CaseStudy from '../case_study'
import About from './about'

import 'sass/adalida_page/case_study.scss'

const Understanding = 'images/airbrush_art_studio/understanding.webp'
const Research = 'images/airbrush_art_studio/research.webp'
const InformationArchitecture = 'images/airbrush_art_studio/information_architecture.webp'
const Tools = 'images/airbrush_art_studio/tools.webp'
const Mockups = 'images/airbrush_art_studio/mockups.webp'
const ServicePage = 'images/airbrush_art_studio/service_page.webp'
const ServiceComponents = 'images/airbrush_art_studio/service_components.webp'
const Responsively = 'images/airbrush_art_studio/responsively.webp'
const Splash = 'images/airbrush_art_studio/splash.webp'
const Publish = 'images/airbrush_art_studio/publish.webp'
const HandoffScreens = 'images/airbrush_art_studio/handoff_screens.webp'
const Handoff = 'images/airbrush_art_studio/handoff.webp'

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
  HandoffVideo,
  Understanding,
  Research,
  InformationArchitecture,
  Tools,
  Mockups,
  ServicePage,
  ServiceComponents,
  Responsively,
  Splash,
  Publish,
  HandoffSmallScreenVideo
]

const embeddedVideoProps: Record<string, EmbeddedVideoProps> = {
  [HandoffVideo]: {
    image: {
      path: Handoff,
      widthPx: 1606,
      heightPx: 916,
      alt: 'Handoff'
    },
    videos: [{
      path: HandoffVideo,
      widthPx: 630,
      heightPx: 394,
      xOffsetPx: 485,
      yOffsetPx: 240
    }]
  },
  [HandoffSmallScreenVideo]: {
    image: {
      path: HandoffScreens,
      widthPx: 1606,
      heightPx: 1009,
      alt: 'Handoff Interactions Included'
    },
    videos: [
      {
        path: HandoffSmallScreenVideo,
        widthPx: 316,
        heightPx: 686,
        xOffsetPx: 187,
        yOffsetPx: 184,
        rounded: true
      },
      {
        path: HandoffLargeScreenVideo,
        widthPx: 696,
        heightPx: 483,
        xOffsetPx: 765,
        yOffsetPx: 315
      }
    ]
  }
}

// TODO: dedupe this method
const createMediaTag = (media: string): JSX.Element =>
  media in embeddedVideoProps
    ? <EmbeddedVideo {...embeddedVideoProps[media]} />
    : <ImageCard media={media} style={cardStyle} />

const carouselMedia = allImages.map(carouselMediaTag)

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
      {createMediaTag(image)}
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

export default AirbrushArtStudio
