import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/cyph.scss'

const Define = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='ADA Compliant'
        text='I ensured my design was ADA compliant by keeping the design monochromatic.'
      />
      <PictureCaption
        heading='How'
        text="The design when monochromatic ensures a high contrast between elements, which makes it accessible for everyone to see."
      />
    </div>
  )
  return (
    <Card title='// Hi-Contrast Mockup'>
      <MediaWithText media='images/logi/define.png' text={pictureCaption} reversed />
    </Card>
  )
}

export default Define
