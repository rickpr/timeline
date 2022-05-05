import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/image'

const MediaWithText = ({ media, text, reversed = false }) => {
  const style = { minWidth: '50ch', maxHeight: '82vh' }
  const objectPosition = reversed ? '0' : '100%'
  const makeMediaTag = () => {
    if (media.endsWith('.png')) {
      return <Image path={media} style={style} imgStyle={{ objectPosition }} />
    }
    if (media.endsWith('.mp4')) {
      return <video src={media} autoPlay loop muted playsInline style={{ height: '82vh' }} />
    }
    if (media.endsWith('.gif')) {
      return <img alt='' src={media} type='video/mp4' autoPlay style={{ height: '82vh' }} />
    }

    throw new Error(`Could not identify type of media ${media}`)
  }
  const mediaTag = makeMediaTag()
  const mediaPlaceContent = reversed ? 'flex-start' : 'flex-end'
  const flex = '2 0 49%'
  const imageTag = (
    <div key='image' style={{ display: 'flex', flex, flexShrink: 0, gridArea: 'image', placeContent: mediaPlaceContent, placeItems: 'center' }}>
      {mediaTag}
    </div>
  )
  const textPlaceContent = reversed ? 'flex-end' : 'flex-start'
  const textTag = <div key='text' style={{ display: 'flex', flex, placeContent: textPlaceContent }}>{text}</div>

  const flexWrap = reversed ? 'wrap' : 'wrap-reverse'
  return (
    <div style={{ display: 'flex', flexWrap, gap: '2%' }}>
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