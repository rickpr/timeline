import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import ideateOne from 'videos/cyph/ideate_one.mp4'

import 'sass/adalida_page/cyph.scss'

const IdeateOne = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text="People don't know who their elected officials are or how to connect with them."
      />
      <PictureCaption
        heading='Solution'
        text='Connect voters quickly with their local representatives and a transparent overview of their political, financial, and voting history.'
      />
    </div>
  )

  return (
    <Card title='// Ideate'>
      <MediaWithText media={ideateOne} text={pictureCaption} />
    </Card>
  )
}

export default IdeateOne
