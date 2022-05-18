import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/image'

const MediaWithText = ({ media, text, reversed = false }) => {
  const maxHeight = '82vh'
  const style = { minWidth: '50ch', maxHeight }
  const makeMediaTag = () => {
    if (media.endsWith('.png')) {
      return <Image path={media} style={style} />
    }
    if (media.endsWith('.mp4')) {
      return <video src={media} autoPlay loop muted playsInline style={{ maxHeight }} />
    }
    if (media.endsWith('.gif')) {
      return <img alt='' src={media} type='video/mp4' autoPlay style={{ maxHeight}} />
    }

    throw new Error(`Could not identify type of media ${media}`)
  }
  const mediaTag = makeMediaTag()
  const flex = '2 2 49%'
  const imageTag = (
    <div
      key='image'
      style={{ display: 'flex', flex: '2 2 49%', placeContent: 'center', placeItems: 'center', maxWidth: 'max-content' }}
    >
      {mediaTag}
    </div>
  )
  const textTag = <div key='text' style={{ display: 'flex', flex, placeContent: 'center' }}>{text}</div>

  const flexWrap = reversed ? 'wrap' : 'wrap-reverse'
  return (
    <div style={{ display: 'flex', flexWrap, gap: '2%', placeContent: 'center', margin: '0 auto' }}>
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
