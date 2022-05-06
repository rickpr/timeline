import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/cyph.scss'

const Test = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text="People are interested in learning about trending or popular representatives, but don't know which area's they represent."
      />
      <PictureCaption
        heading='Solution'
        text='Provide a visual map of the district and state where an elected official represents.'
      />
    </div>
  )

  return (
    <Card title='// Test'>
      <MediaWithText media='images/cyph/test.png' text={pictureCaption} />
    </Card>
  )
}

export default Test
