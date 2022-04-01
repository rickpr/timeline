import React from 'react'

import testPhoto from 'images/cyph/test.png'

import Card from '../card'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const Prototype = () => {
  const problem = (
    <div style={{ flexBasis: '32%', flexGrow: 3, flexShrink: 1 }}>
      <h1 className='caption'>The Problem</h1>
      People don&apos;t know who their elected officials are, how to contact them, or easily find their voting history.
      <h1 className='caption'>Goals</h1>
      Connect voters quickly with their local representatives and their political history.
    </div>
  )

  return (
    <Card title='// Prototype'>
      <ImageWithText image={testPhoto} text={problem} />
    </Card>
  )
}

export default Prototype
