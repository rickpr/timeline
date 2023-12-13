import React from 'react'

import Image from 'components/image'
import FloatingVideo, { type Video } from './floating_video'

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

interface TemplateImage {
  path: string
  alt: string
  widthPx: number
  heightPx: number
}

export interface EmbeddedVideoProps {
  image: TemplateImage
  videos: Video[]
}

const EmbeddedVideo = ({ image, videos }: EmbeddedVideoProps): JSX.Element => {
  return (
    <div style={cardStyle}>
      {
        videos.map((video, index) =>
          <FloatingVideo
            key={index}
            imageHeightPx={image.heightPx}
            imageWidthPx={image.widthPx}
            video={video}
          />
        )
      }
      <Image path={image.path} style={style} alt={image.alt} />
    </div>
  )
}

export default EmbeddedVideo
