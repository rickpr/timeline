import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'
import PictureCaption from '../picture_caption'

import 'sass/adalida_page/cyph.scss'

const NextSteps = () => {
  const problem = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Develop Highlight Sections'
        text='Expand the design to add different highlight sections like sales, collections, new releases.'
      />
      <PictureCaption
        heading='Prototyping'
        text='Prototype a logo animation for loading.'
      />
    </div>
  )

  return (
    <Card title='// Next Steps'>
      <MediaWithText media='images/logi/next_steps.png' text={problem} />
    </Card>
  )
}

export default NextSteps