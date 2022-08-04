import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/image'

export const makeMediaTag = ({ media, style = {} }) => {
  if (media.endsWith('.png') || media.endsWith('jpg')) {
    return <Image path={media} style={style} />
  }
  if (media.endsWith('.mp4')) {
    const videoStyle = { maxWidth: '80vw', ...style }
    return <video src={media} autoPlay loop muted playsInline style={videoStyle} />
  }
  if (media.endsWith('.gif')) {
    return <img alt='' src={media} type='video/mp4' autoPlay style={style} />
  }

  throw new Error(`Could not identify type of media ${media}`)
}

const MediaWithText = ({ media, text, reversed = false }) => {
const maxHeight = '82vh'
const style = { minWidth: 'min(50ch, 80vw)', maxHeight }

  const padding = '1em'
  const mediaTag = makeMediaTag({ media, style })
  const flex = '2 2 49%'
  const imageTag = (
    <div
      key='image'
      style={{ display: 'flex', flex, placeContent: 'center', placeItems: 'center', maxWidth: 'max-content', padding }}
    >
      {mediaTag}
    </div>
  )
  const textTag = <div key='text' style={{ display: 'flex', flex, placeContent: 'center', placeItems: 'center', padding }}>{text}</div>

  const flexWrap = reversed ? 'wrap' : 'wrap-reverse'
  return (
    <div style={{
      display: 'flex',
      flexWrap,
      placeContent: 'center',
      margin: '0 auto',
      maxWidth: 'max-content'
    }}>
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
