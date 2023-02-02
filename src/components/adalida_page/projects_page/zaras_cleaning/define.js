import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Define = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem'
        text="People found HBOMax's user interface difficult to navigate and non-intuitive."
      />
      <PictureCaption
        heading='Solution'
        text="Design a navigation bar that allows users to easily navigate through the app's features."
      />
    </div>
  )
  return (
    <Card title='// Ideate'>
      <MediaWithText
        media='images/zaras_cleaning/define.png'
        text={pictureCaption}
        reversed
      />
    </Card>
  )
}

export default Define
