import React from 'react'

import { makeMediaTag } from 'components/adalida_page/media_with_text'

import GlassCard from '../glass_card'

const GlassImage = ({ media }: { media: string }): JSX.Element => (
  <GlassCard>
    {makeMediaTag({ media, style: { width: '100%', borderRadius: '8px' } })}
  </GlassCard>
)

export default GlassImage
