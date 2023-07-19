import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import React from 'react'

import ImageQuery from 'queries/image'

const Image = ({ altText, path, ...options }) => {
  const image = ImageQuery(path)
  return (
    <GatsbyImage
      image={getImage(image)}
      alt={altText || image.name}
      {...options}
    />
  )
}

Image.propTypes = {
  altText: PropTypes.string,
  path: PropTypes.string.isRequired
}

export default Image
