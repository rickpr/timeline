import React, { useState } from 'react'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

import PrototypeVideo from 'videos/tldr/prototype.mp4'
import CarouselOverlay, { carouselMediaTag } from '../../carousel_overlay'
import Project from '../project'
import ImageCard from '../../image_card'
import About from './about'
import EmbeddedVideo from './embedded_video'

import 'sass/adalida_page/project.scss'

const EmpathizeProblem = 'images/tldr/empathize_problem.webp'
const EmpathizeUsers = 'images/tldr/empathize_users.webp'
const DefineProblem = 'images/tldr/define_problem.webp'
const ValueProposition = 'images/tldr/value_proposition.webp'
const Ideate = 'images/tldr/ideate.webp'
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

const allImages = [
  [EmpathizeProblem],
  [EmpathizeUsers],
  [DefineProblem],
  [ValueProposition],
  [Ideate],
  [PrototypeVideo],
  [PrototypeRoadmap],
  [PrototypePhase5]
]

const carouselMedia = allImages.flat().map(carouselMediaTag)

const TLDR = (): JSX.Element => {
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
            style={{ padding: '10px 20px' }}
            tabIndex={0}
            data-aos='fade-up'
            role='tab'
            onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && displayCarousel(currentIndex) }}
            onClick={() => { displayCarousel(currentIndex) }}
          >
            {image.endsWith('.mp4') ? <EmbeddedVideo /> : <ImageCard media={image} style={cardStyle} />}
          </div>
        )
      })}
    </div>
  )

  return (
    <Project>
      <About />
      {images}
      {showCarousel && <CarouselOverlay dismiss={dismiss} media={carouselMedia} index={mediaIndex} />}
    </Project>
  )
}

export default TLDR
