import React from 'react'

import Card from '../card'
import PictureCaption from '../picture_caption'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Prototype = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <h1>&#47;&#47; Color - Design System</h1>
      <PictureCaption
        heading='Apply a Color Design System'
        text="I added color to the design by utilizing an already existing color design system and applying it to this mockup. "
      />
      <PictureCaption
        heading='Implementation'
        text='Implementing the design system was easy because I used the contrast in the monochromatic design to choose where to apply color.'
      />
    </div>
  )

  return (
    <Card>j
      <MediaWithText media='images/logi/prototype.png' text={pictureCaption} />
    </Card>
  )
}

export default Prototype
