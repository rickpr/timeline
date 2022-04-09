import React from 'react'

import designPhoto from 'images/cyph/design.png'

import Card from '../card'
import PictureCaption from '../picture_caption'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const Define = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text='Citizens United makes it difficult for people to see who is financially sponsoring their local representatives.'
      />
      <PictureCaption
        heading='Solution'
        text='Provide a fast and transparent way for people to learn about a politician, their political and voting history, and their donors.'
      />
    </div>
  )
  return (
    <Card title='// Define'>
      <ImageWithText
        image={designPhoto}
        text={pictureCaption}
        reversed={true}
      />
    </Card>
  )
}

export default Define
