import React, { useState } from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import PrototypeVideo from 'videos/tldr/prototype.mp4'
import PrototypePhase5Video from 'videos/tldr/prototype_phase_5.mp4'
import CarouselOverlay, { carouselMediaTag } from '../../carousel_overlay'
import CaseStudy from '../case_study'
import ImageCard from '../../image_card'
import EmbeddedVideo, { type EmbeddedVideoProps } from '../embedded_video'
import About from './about'

const EmpathizeProblem = 'images/tldr/empathize_problem.webp'
const EmpathizeUsers = 'images/tldr/empathize_users.webp'
const DefineProblem = 'images/tldr/define_problem.webp'
const ValueProposition = 'images/tldr/value_proposition.webp'
const Ideate = 'images/tldr/ideate.webp'
const Prototype = 'images/tldr/prototype.webp'
const PrototypeRoadmap = 'images/tldr/prototype_roadmap.webp'
const PrototypePhase5 = 'images/tldr/prototype_phase_5.webp'

const containerStyle = {
  minWidth: '95%',
  maxWidth: '95dvw',
  margin: '0 2.5dvw',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '10px 20px'
}

const cardStyle = {
  cursor: 'pointer',
  borderRadius: '2dvmax',
  overflow: 'hidden'
}

const allMedia = [
  EmpathizeProblem,
  EmpathizeUsers,
  DefineProblem,
  ValueProposition,
  Ideate,
  PrototypeVideo,
  PrototypeRoadmap,
  PrototypePhase5Video
]

const embeddedVideoProps: Record<string, EmbeddedVideoProps> = {
  [PrototypeVideo]: {
    image: {
      path: Prototype,
      widthPx: 1606,
      heightPx: 1190,
      alt: 'Prototype'
    },
    videos: [{
      path: PrototypeVideo,
      widthPx: 1008,
      heightPx: 630,
      xOffsetPx: 409,
      yOffsetPx: 251
    }]
  },
  [PrototypePhase5Video]: {
    image: {
      path: PrototypePhase5,
      widthPx: 1606,
      heightPx: 1190,
      alt: 'Prototype Phase 5'
    },
    videos: [{
      path: PrototypePhase5Video,
      widthPx: 330,
      heightPx: 716,
      xOffsetPx: 139,
      yOffsetPx: 222,
      rounded: true
    }]
  }
}

const carouselMedia = allMedia.map(carouselMediaTag)

const createMediaTag = (media: string): JSX.Element =>
  media in embeddedVideoProps
    ? <EmbeddedVideo {...embeddedVideoProps[media]} />
    : <ImageCard media={media} style={cardStyle} />

const TLDR = (): JSX.Element => {
  useAnimateOnScroll()
  const [showCarousel, setShowCarousel] = useState(false)
  const [mediaIndex, setMediaIndex] = useState(0)
  const dismiss = (): void => { setShowCarousel(false) }
  const displayCarousel = (index: number): void => {
    setMediaIndex(index)
    setShowCarousel(true)
  }

  const displayMedia = allMedia.map((media, index) =>
    <div
      key={index}
      style={containerStyle}
      tabIndex={0}
      data-aos='fade-up'
      role='tab'
      onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && displayCarousel(index) }}
      onClick={() => { displayCarousel(index) }}
    >
      {createMediaTag(media)}
    </div>
  )

  return (
    <CaseStudy>
      <About />
      {displayMedia}
      {showCarousel && <CarouselOverlay dismiss={dismiss} media={carouselMedia} index={mediaIndex} />}
    </CaseStudy>
  )
}

export default TLDR
