import React from 'react'

import designTwoPhoto from 'images/cyph/design_two.png'

import Card from '../card'
import ImageWithText from '../image_with_text'
import HeadingsWithText from '../headings_with_text'

import 'sass/adalida_page/cyph.scss'

const Test = () => {
  const problem = {
    'Problem:': 'Voters find it difficult to get involved in local politics.',
    Goals: "Cyph provides an in-person, virtual, and upcoming events and information based on the user's location and saved choices."
  }

  return (
    <Card title='// Test'>
      <ImageWithText
        image={designTwoPhoto}
        text={<HeadingsWithText headingsAndText={problem} />}
      />
    </Card>
  )
}

export default Test
