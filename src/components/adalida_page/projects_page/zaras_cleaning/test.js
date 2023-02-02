import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'
import PictureCaption from '../picture_caption'

import 'sass/adalida_page/project.scss'

const Test = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem:'
        text='Users stream from several platforms.'
      />
      <PictureCaption
        heading='Solution'
        text='Employ bottom up design starting with mobile first to ensure the best user-experience.'
      />
    </div>

  )

  return (
    <Card title='// Test'>
      <MediaWithText
        media='images/zaras_cleaning/test.png'
        text={pictureCaption}
      />
    </Card>
  )
}

export default Test
