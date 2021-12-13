import React from 'react'

import Carousel from './carousel'

const CaptionGallery = ({ photos, caption, id }) => {
  const images = photos.map((photo, index) => ({ id: index, imageUrl: photo, altText: caption }))
  const carousel = { id, images }
  return (
    <div style={{ border: '1px solid black', height: 'min-content' }}>
      <Carousel carousel={carousel} />
    </div>
  )
}

export default CaptionGallery
