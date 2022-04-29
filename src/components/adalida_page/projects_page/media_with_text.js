import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/image'

const MediaWithText = ({ media, text, reversed = false }) => {
  const makeMediaTag = () => {
    if (media.endsWith('.png')) return <Image path={media} style={{ width: '100%' }} imgStyle={{ width: '100%' }} />
    if (media.endsWith('.mp4')) return (
      <video src={media} autoPlay loop muted playsInline style={{ margin: '0 auto', width: '100%' }} />
    )
    if (media.endsWith('.gif')) return <img src={media} type='video/mp4' autoPlay style={{ margin: '0 auto' }} />

    throw new Error(`Could not identify type of media ${media}`)
  }
  const mediaTag = makeMediaTag()
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
      {mediaTag}
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

MediaWithText.propTypes = {
  media: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  reversed: PropTypes.bool
}

export default MediaWithText
