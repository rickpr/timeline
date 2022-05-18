import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'
import PictureCaption from '../picture_caption'
import ScalableText from 'components/scalable_text'

import 'sass/adalida_page/cyph.scss'

const NextSteps = () => {
  const problem = (
    <div className='picture-caption'>
      <PictureCaption
        heading={
          <ScalableText
            text='Develop Influence Experience'
            color='#000000'
            customStyles={{
              fontSize: 'initial',
              maxHeight: '3em',
              maxWidth: '70vw',
              fontWeight: 'normal'
            }}
            viewBoxWidthMultiplier={8}
          />
        }
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
      <MediaWithText media='images/cyph/next_steps.png' text={problem} />
    </Card>
  )
}

export default NextSteps
