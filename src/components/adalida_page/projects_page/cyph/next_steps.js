import React from 'react'

import testTwoPhoto from 'images/cyph/test_two.png'

import Card from '../card'
import ImageWithText from '../image_with_text'
import PictureCaption from '../picture_caption'
import ScalableText from 'components/scalable_text'

import 'sass/adalida_page/cyph.scss'

const NextSteps = () => {
  const problem = (
    <div className='picture-caption' style={{ width: 'min-content' }}>
      <PictureCaption
        heading={
          <ScalableText
            text='Develop Influence Experience'
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
      <ImageWithText
        image={testTwoPhoto}
        text={problem}
      />
    </Card>
  )
}

export default NextSteps
