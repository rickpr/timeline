import React from 'react'

import { makeMediaTag } from '../media_with_text'

export interface Video {
  path: string
  widthPx: number
  heightPx: number
  xOffsetPx: number
  yOffsetPx: number
  rounded?: boolean
}

interface FloatingVideoProps {
  video: Video
  imageWidthPx: number
  imageHeightPx: number
}

const FloatingVideo = ({ video, imageWidthPx, imageHeightPx }: FloatingVideoProps): JSX.Element => {
  const videoContainerStyle = {
    position: 'absolute' as const,
    borderRadius: video.rounded === true ? '2dvh' : 0,
    overflow: 'hidden',
    left: `calc(100% * calc(${video.xOffsetPx} / ${imageWidthPx}))`,
    top: `calc(100% * calc(${video.yOffsetPx} / ${imageHeightPx}))`,
    width: `calc(100% * calc(${video.widthPx} / ${imageWidthPx}))`,
    height: `calc(100% * calc(${video.heightPx} / ${imageHeightPx}))`
  }
  return (
    <div style={videoContainerStyle}>
      {makeMediaTag({ media: video.path })}
    </div>
  )
}

export default FloatingVideo
