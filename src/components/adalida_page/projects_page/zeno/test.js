import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Test = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='// Problem'
        text='People want a fast delivery time.'
      />
      <PictureCaption
        heading='// Solution'
        text='Provide users an option to track their package after checkout and offer a hyper local delivery tracking.'
      />
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zeno/test.png' text={pictureCaption} />
    </Card>
  )
}

export default Test
