import React from 'react'

import designTwoPhoto from 'images/cyph/design_two.png'

import Card from '../card'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const Test = () => {
  const problem = (
    <div style={{ flexBasis: '32%', flexGrow: 3, flexShrink: 1 }}>
      <h1 className='caption'>Problem:</h1>
      Voters find it difficult to get involved in local politicals
      <h1 className='caption'>Goals</h1>
      Cyph provides an in-person, virtual, and upcoming events and information based on the user&apos;s location and
      saved choices.
    </div>
  )

  return (
    <Card title='// Test'>
      <ImageWithText image={designTwoPhoto} text={problem} />
    </Card>
  )
}

export default Test
