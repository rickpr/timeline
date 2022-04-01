import React from 'react'

import testTwoPhoto from 'images/cyph/test_two.png'

import Card from '../card'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const NextSteps = () => {
  const problem = (
    <>
      <h1>Develop</h1>
      <h1>Influence</h1>
      <h1 className='caption'>Experience</h1>
      Design an experience where users can scan products or company logos and learn about politicians they donate to.
      <h1 className='caption'>User Testing</h1>
      Conduct in-person usability studies.
    </>
  )

  return (
    <Card title='// Next Steps'>
      <ImageWithText image={testTwoPhoto} text={problem} />
    </Card>
  )
}

export default NextSteps
