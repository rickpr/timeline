import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/image'

const ImageWithText = ({ image, text, reversed = false }) => {
  const imageTag = (
    <div
      key='image'
      style={{
        display: 'flex',
        flexBasis: '63%',
        flexGrow: 2,
        placeItems: 'center center'
      }}
    >
      <Image path={image} style={{ width: '100%' }} imgStyle={{ width: '100%' }} />
    </div>
  )

  const textTag = (
    <div key='text' style={{ flexBasis: '31%', flexGrow: 4, flexShrink: 1 }}>
      {text}
    </div>
  )

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap-reverse', placeItems: 'center', gap: '6%' }}>
      {reversed ? [textTag, imageTag] : [imageTag, textTag]}
    </div>
  )
}

ImageWithText.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  reversed: PropTypes.bool
}

export default ImageWithText
