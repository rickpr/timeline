import React from 'react'

import Carousel from './carousel'

const CaptionGallery = ({ photos, caption, id }) => {
  const images = photos.map((photo, index) => ({ id: index, imageUrl: photo, altText: caption }))
  const carousel = { id, images }
  return (
    <div style={{ marginTop: '-1em' }}>
      <Carousel carousel={carousel} />
      <div style={{ textAlign: 'center' }}>{caption}</div>
    </div>
  )
}

export default CaptionGallery
