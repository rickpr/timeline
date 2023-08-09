import { GatsbyImage, getImage, type GatsbyImageProps } from 'gatsby-plugin-image'
import React from 'react'

import ImageQuery from 'queries/image'

interface Props extends Omit<GatsbyImageProps, 'image'> {
  path: string
}

const Image = ({ path, ...gatsbyImageProps }: Props): JSX.Element => {
  const image = ImageQuery(path)
  return (
    <GatsbyImage
      // @ts-expect-error We need to figure out GraphQL types
      image={getImage(image)}
      objectFit='contain'
      {...gatsbyImageProps}
    />
  )
}

export default Image
