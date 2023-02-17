import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Test = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text="People are interested in learning about trending or popular representatives, but don't know which areas they represent."
      />
      <PictureCaption
        heading='Solution'
        text='Provide a visual map of the district and state where an elected official represents.'
      />
    </div>
  )

  return (
    <Card>
      <h1>&#47;&#47; Test</h1>
      <MediaWithText media='images/cyph/test.png' text={pictureCaption} />
    </Card>
  )
}

export default Test
