import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const Prototype = () => {
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
    <Card title='// Prototype'>
      <ImageWithText image='images/cyph/prototype.png' text={pictureCaption} />
    </Card>
  )
}

export default Prototype
