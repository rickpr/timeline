import React from 'react'

import designPhoto from 'images/cyph/design.png'

import Card from '../card'
import HeadingsWithText from '../headings_with_text'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const Define = () => {
  const headingsAndText = {
    'The Problem': 'Citizens United makes it difficult for voters to see who is financials sponsoring their local representatives.',
    'My Solution': "Provide a fast and easy way for people to learn about a politician's donors."
  }
  return (
    <Card title='// Define'>
      <ImageWithText
        image={designPhoto}
        text={<HeadingsWithText headingsAndText={headingsAndText} />}
        reversed={true}
      />
    </Card>
  )
}

export default Define
