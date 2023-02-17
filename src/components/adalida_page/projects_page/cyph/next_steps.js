import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'
import PictureCaption from '../picture_caption'

import 'sass/adalida_page/project.scss'

const NextSteps = () => {
  const problem = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Develop'
        text='Design an experience where users can scan products or company logos and learn about politicians they donate to.'
      />
      <PictureCaption
        heading='User Testing'
        text='Conduct in-person usability studies.'
      />
    </div>
  )

  return (
    <Card>
      <h1>&#47;&#47; Next Steps</h1>
      <MediaWithText media='images/cyph/next_steps.png' text={problem} />
    </Card>
  )
}

export default NextSteps
