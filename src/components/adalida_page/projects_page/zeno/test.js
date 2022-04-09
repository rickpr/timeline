import React from 'react'

import designTwoPhoto from 'images/cyph/design_two.png'

import Card from '../card'
import ImageWithText from '../image_with_text'
import PictureCaption from '../picture_caption'

import 'sass/adalida_page/cyph.scss'

const Test = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem:'
        text='Voters find it difficult to get involved in local politics.'
      />
      <PictureCaption
        heading='Solution'
        text='Cyph provides information on upcoming events and updates for legal, in-person and virtual community events. Voters are suggested events based on real time or location (depending on preferences).'
      />
    </div>

  )

  return (
    <Card title='// Test'>
      <ImageWithText
        image={designTwoPhoto}
        text={pictureCaption}
      />
    </Card>
  )
}

export default Test
