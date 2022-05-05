import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import ideateTwo from 'videos/cyph/ideate_two.mp4'

import 'sass/adalida_page/cyph.scss'

const IdeateTwo = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text='Some people are unsure about the political terms and positions used in government.'
      />
      <PictureCaption
        heading='Solution'
        text='Provide informational pop ups, which help explain a term or position.'
      />
    </div>
  )
  return (
    <Card title='// Ideate'>
      <MediaWithText media={ideateTwo} text={pictureCaption} reversed={true} />
    </Card>
  )
}

export default IdeateTwo
