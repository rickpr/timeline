import React from 'react'

import designTwoPhoto from 'images/cyph/design_two.png'

import Card from '../card'
import ImageWithText from '../image_with_text'
import HeadingsWithText from '../headings_with_text'

import 'sass/adalida_page/cyph.scss'

const Test = () => {
  const problem = {
    'Problem:': 'Voters find it difficult to get involved in local politics.',
    Solution: "Cyph provides information on upcoming events and updates for legal,in-person and virtual community events. Voter's are suggested events based on real time or location (depending on preferences)."
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
