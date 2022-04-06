import React from 'react'

import testPhoto from 'images/cyph/test.png'

import Card from '../card'
import HeadingsWithText from '../headings_with_text'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const Prototype = () => {
  const problem = {
    'Problem': "People don't know who their elected officials are or how to connect with them.",
    Solution: 'Connect voters quickly with their local representatives and a transparent overview of their political, financial, and voting history.'
  }

  return (
    <Card title='// Prototype'>
      <ImageWithText
        image={testPhoto}
        text={<HeadingsWithText headingsAndText={problem} />}
      />
    </Card>
  )
}

export default Prototype
