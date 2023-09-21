import React, { type CSSProperties, useState } from 'react'
import { makeMediaTag } from '../projects/media_with_text'
import Popup from './popup'

const ImageCard = ({ media, style }: { media: string, style?: CSSProperties }): JSX.Element => {
  const [showPopUp, setShowPopUp] = useState(false)

  return (
    <>
      {showPopUp && <Popup closePopUp={() => { setShowPopUp(false) }} media={media} />}
      <div
        style={style}
        role='tab'
        tabIndex={0}
        onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && setShowPopUp(true) }}
        onClick={() => { setShowPopUp(true) }}
      >
        {makeMediaTag({ media, style: { height: '100%', width: '100%' } })}
      </div>
    </>
  )
}
export default ImageCard
