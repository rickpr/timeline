import React from 'react'

import testTwoPhoto from 'images/cyph/test_two.png'

import Card from '../card'
import ImageWithText from '../image_with_text'
import PictureCaption from '../picture_caption'

import 'sass/adalida_page/cyph.scss'

const NextSteps = () => {
  const problem = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Develop Influence Experience'
        text='Design an experience where users can scan products or company logos and learn about politicians they donate to.'
      />
      <PictureCaption
        heading='User Testing'
        text='Conduct in-person usability studies.'
      />
    </div>
  )

  return (
    <Card title='// Next Steps'>
      <ImageWithText
        image={testTwoPhoto}
        text={problem}
      />
    </Card>
  )
}

export default NextSteps
