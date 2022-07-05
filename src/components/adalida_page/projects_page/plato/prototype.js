import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import prototype from 'images/plato/prototype.png'

import 'sass/adalida_page/cyph.scss'

const Prototype = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Apply a Color Design System'
        text="I added color to the design by utilizing an already existing color design system and applying it to this mockup. "
      />
      <PictureCaption
        heading='Implementation'
        text='Implementing the design system was easy because I used the contrast in the monochramtic design to choose wher to apply color.'
      />
    </div>
  )

  return (
    <Card title='// Color - Design System'>
      <MediaWithText media='images/plato/prototype.png' text={pictureCaption} />
    </Card>
  )
}

export default Prototype
