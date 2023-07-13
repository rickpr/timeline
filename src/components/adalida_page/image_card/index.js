import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { makeMediaTag } from '../projects_page/media_with_text'
import Popup from './popup'

const ImageCard = ({ media, style }) => {
  const [showPopUp, setShowPopUp] = useState(false)

  return (
    <>
      {showPopUp && <Popup closePopUp={() => { setShowPopUp(false) }} media={media} />}
      <div
        style={style}
        role='tab'
        tabIndex={0}
        onKeyDown={(event) => [' ', 'Enter'].includes(event.key) && setShowPopUp(true)}
        onClick={() => setShowPopUp(true)}
      >
        {makeMediaTag({ media, style: { height: '100%', width: '100%' } })}
      </div>
    </>
  )
}

ImageCard.propTypes = {
  media: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default ImageCard
