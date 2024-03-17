import React from 'react'

import { makeMediaTag } from 'components/media_with_text'

const GlassImage = ({ media }: { media: string }): JSX.Element => (
  <div className='glass card'>
    {makeMediaTag({ media, style: { width: '100%', borderRadius: '8px' } })}
  </div>
)

export default GlassImage
