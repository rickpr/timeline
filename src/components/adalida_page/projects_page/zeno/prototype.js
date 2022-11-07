import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import prototype from 'videos/zeno/prototype.mp4'

import 'sass/adalida_page/project.scss'

const Prototype = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text="People want to know when their packages are going to arrive."
      />
      <PictureCaption
        heading='Solution'
        text='Provide a delivery date and time after purchase, so they know when to expect their package.'
      />
    </div>
  )

  return (
    <Card title='// Prototype'>
      <MediaWithText media={prototype} text={pictureCaption} />
    </Card>
  )
}

export default Prototype
