import React from 'react'

import { makeMediaTag } from '../media_with_text'

import Image from 'components/image'

const style = {
  height: '100%',
  width: '100%',
  minWidth: '100%'
}
const cardStyle = {
  cursor: 'pointer',
  borderRadius: '2dvmax',
  overflow: 'hidden',
  position: 'relative' as const
}

interface EmbeddedVideoMeasurements {
  containerWidthPx: number
  containerHeightPx: number
  videoWidthPx: number
  videoHeightPx: number
  videoXOffsetPx: number
  videoYOffsetPx: number
}

export interface EmbeddedVideoProps {
  imagePath: string
  video: string
  measurements: EmbeddedVideoMeasurements
  rounded?: boolean
  videoStyle?: React.CSSProperties
}

const EmbeddedVideo = ({ imagePath, video, measurements, rounded = false, videoStyle = {} }: EmbeddedVideoProps): JSX.Element => {
  const videoContainerStyle = {
    position: 'absolute' as const,
    borderRadius: rounded ? '2dvw' : 0,
    overflow: 'hidden',
    left: `calc(100% * calc(${measurements.videoXOffsetPx} / ${measurements.containerWidthPx}))`,
    top: `calc(100% * calc(${measurements.videoYOffsetPx} / ${measurements.containerHeightPx}))`,
    width: `calc(100% * calc(${measurements.videoWidthPx} / ${measurements.containerWidthPx}))`,
    height: `calc(100% * calc(${measurements.videoHeightPx} / ${measurements.containerHeightPx}))`
  }
  return (
    <div style={cardStyle}>
      <div style={videoContainerStyle}>
        {makeMediaTag({ media: video, style: videoStyle })}
      </div>
      <Image path={imagePath} style={style} alt={imagePath} />
    </div>
  )
}

export default EmbeddedVideo
