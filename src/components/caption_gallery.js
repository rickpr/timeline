import React from 'react'
import PropTypes from 'prop-types'

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

CaptionGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  caption: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default CaptionGallery
