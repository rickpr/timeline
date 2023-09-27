import React, { useState } from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import PrototypeVideo from 'videos/tldr/prototype.mp4'
import PrototypePhase5Video from 'videos/tldr/prototype_phase_5.mp4'
import CarouselOverlay, { carouselMediaTag } from '../../carousel_overlay'
import Project from '../project'
import ImageCard from '../../image_card'
import About from './about'
import EmbeddedVideo, { type EmbeddedVideoProps } from './embedded_video'

import 'sass/adalida_page/project.scss'

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
  justifyContent: 'space-around'
}

const cardStyle = {
  cursor: 'pointer',
  borderRadius: '2dvmax',
  overflow: 'hidden'
}

const allMedia = [
  [EmpathizeProblem],
  [EmpathizeUsers],
  [DefineProblem],
  [ValueProposition],
  [Ideate],
  [PrototypeVideo],
  [PrototypeRoadmap],
  [PrototypePhase5Video]
]

const embeddedVideoProps: Record<string, EmbeddedVideoProps> = {
  [PrototypeVideo]: {
    video: PrototypeVideo,
    imagePath: Prototype,
    measurements: {
      containerWidthPx: 1606,
      containerHeightPx: 1190,
      videoWidthPx: 1008,
      videoHeightPx: 630,
      videoXOffsetPx: 409,
      videoYOffsetPx: 251
    }
  },
  [PrototypePhase5Video]: {
    video: PrototypePhase5Video,
    imagePath: PrototypePhase5,
    measurements: {
      containerWidthPx: 1606,
      containerHeightPx: 1190,
      videoWidthPx: 330,
      videoHeightPx: 716,
      videoXOffsetPx: 139,
      videoYOffsetPx: 222
    },
    rounded: true
  }
}

const carouselMedia = allMedia.flat().map(carouselMediaTag)

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

  let displayMediaIndex = 0
  const displayMedia = allMedia.map((mediaGroup, index) =>
    <div key={index} style={containerStyle}>
      {mediaGroup.map((media: string) => {
        const currentIndex = displayMediaIndex++
        return (
          <div
            key={media}
            style={{ padding: '10px 20px' }}
            tabIndex={0}
            data-aos='fade-up'
            role='tab'
            onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && displayCarousel(currentIndex) }}
            onClick={() => { displayCarousel(currentIndex) }}
          >
            {createMediaTag(media)}
          </div>
        )
      })}
    </div>
  )

  return (
    <Project>
      <About />
      {displayMedia}
      {showCarousel && <CarouselOverlay dismiss={dismiss} media={carouselMedia} index={mediaIndex} />}
    </Project>
  )
}

export default TLDR
