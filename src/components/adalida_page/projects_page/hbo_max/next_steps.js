import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'
import PictureCaption from '../picture_caption'

import nextSteps from 'videos/hbo_max/next_steps.mp4'

import 'sass/adalida_page/project.scss'

const NextSteps = () => {
  const problem = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Develop Influence Experience'
        text='Design an experience where titles are suggested based on their viewing history to create an overall more personalized experience for the viewer.'
      />
      <PictureCaption
        heading='User Testing'
        text='Conduct in-person usability studies.'
      />
    </div>
  )

  return (
    <Card title='// Next Steps'>
      <MediaWithText media={nextSteps} text={problem} />
    </Card>
  )
}

export default NextSteps
