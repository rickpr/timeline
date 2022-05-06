import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'
import continueWatching from 'videos/hbo_max/continue_watching.mp4'

import 'sass/adalida_page/cyph.scss'

const ContinueWatching = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text="People want to view more content about the making of the film or show."
      />
      <PictureCaption
        heading='Solution'
        text='Provide information on the actors, directors, deleted scenes, trailers, etc.'
      />
    </div>
  )

  return (
    <Card title='// Prototype'>
      <MediaWithText media={continueWatching} text={pictureCaption} />
    </Card>
  )
}

export default ContinueWatching
