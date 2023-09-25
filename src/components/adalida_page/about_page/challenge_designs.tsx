import React, { useState } from 'react'

import CarouselOverlay, { carouselMediaTag } from '../carousel_overlay'
import Card from '../projects/card'
import SmallProject from './small_project'

import checkmark from 'videos/about/checkmark.mp4'
import screenRecording from 'videos/about/screen_recording.mp4'
import challengeDesign from 'videos/about/challenge_design.mp4'
import salesAnalytics from 'videos/about/sales_analytics.mp4'
import totalSales from 'videos/about/total_sales.mp4'

const styles = {
  display: 'flex',
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  placeContent: 'center',
  gap: '30px'
}

const allMedia = [
  checkmark,
  screenRecording,
  challengeDesign,
  salesAnalytics,
  totalSales,
  'about/clock.jpg',
  'about/venn_dashboard.jpg',
  'about/shazam.png',
  'about/sentra.jpg',
  'about/richmond.jpg',
  'about/global_dashboard.jpg',
  'about/emnify.jpg'
]

const carouselMedia = allMedia.map(carouselMediaTag)

const ChallengeDesigns = (): React.ReactElement => {
  const [showCarousel, setShowCarousel] = useState(false)
  const [mediaIndex, setMediaIndex] = useState(0)
  const dismiss = (): void => { setShowCarousel(false) }
  const displayCarousel = (index: number): void => {
    setMediaIndex(index)
    setShowCarousel(true)
  }

  return (
    <Card>
      <div style={styles}>
        {allMedia.map((media, index) =>
          <div
            tabIndex={0}
            role='tab'
            key={media}
            onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && displayCarousel(index) }}
            onClick={() => { displayCarousel(index) }}
          >
            <SmallProject media={media} />
          </div>
        )}
      </div>

      {showCarousel && <CarouselOverlay dismiss={dismiss} media={carouselMedia} index={mediaIndex} />}
    </Card>
  )
}

export default ChallengeDesigns
