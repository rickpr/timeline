import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import define from 'videos/zeno/define.mp4'

import 'sass/adalida_page/cyph.scss'

const Define = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text='Users are interested in shopping the latest trends by top designers.'
      />
      <PictureCaption
        heading='Solution'
        text="Design a section which highlights the newest designer's trends."
      />
    </div>
  )
  return (
    <Card title='// Define'>
      <MediaWithText media={define} text={pictureCaption} reversed />
    </Card>
  )
}

export default Define
