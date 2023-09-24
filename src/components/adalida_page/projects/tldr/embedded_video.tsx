import React from 'react'

import { makeMediaTag } from '../media_with_text'

import Image from 'components/image'
import PrototypeVideo from 'videos/tldr/prototype.mp4'

const Prototype = 'images/tldr/prototype.webp'

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

const videoContainerStyle = {
  position: 'absolute' as const,
  left: 'calc(100% * calc(467 / 1664))',
  top: 'calc(100% * calc(250 / 1190))',
  width: 'calc(100% * calc(1008 / 1664))',
  height: 'calc(100% * calc(630 / 1190))'
}

const EmbeddedVideo = (): JSX.Element => {
  return (
    <div style={cardStyle}>
      <Image path={Prototype} style={style} alt={Prototype} />
      <div style={videoContainerStyle}>
        {makeMediaTag({ media: PrototypeVideo, style })}
      </div>
    </div>
  )
}

export default EmbeddedVideo
