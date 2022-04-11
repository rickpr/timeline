import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import React from 'react'

import ImageQuery from 'queries/image'

const Image = ({ altText, path, ...options }) => {
  const image = ImageQuery(path)
  let imageStyle = { objectFit: 'contain' }
  if (options.imgStyle) imageStyle = { objectFit: 'contain', ...options.imgStyle }
  return <GatsbyImage image={getImage(image)} alt={altText || image.name} {...options} imgStyle={imageStyle} />
}

Image.propTypes = {
  altText: PropTypes.string,
  path: PropTypes.string.isRequired
}

export default Image
