import React from 'react'

import designPhoto from 'images/cyph/design.png'

import Card from '../card'
import HeadingsWithText from '../headings_with_text'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const Define = () => {
  const headingsAndText = {
    Problem: 'Citizens United makes it difficult for people to see who is financially sponsoring their local representatives.',
    Solution: 'Provide a fast and transparent way for people to learn about a politician, their political and voting history, and their donors.'
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
