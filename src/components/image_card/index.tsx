import React, { type CSSProperties } from 'react'

import { makeMediaTag } from '../media_with_text'

const ImageCard = ({ media, style }: { media: string, style?: CSSProperties }): JSX.Element =>
  <div style={style}>
    {makeMediaTag({ media, style: { height: '100%', width: '100%', minWidth: '100%' } })}
  </div>

export default ImageCard
