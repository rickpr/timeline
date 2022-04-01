import React from 'react'

import designPhoto from 'images/cyph/design.png'

import Card from '../card'
import ImageWithText from '../image_with_text'

import 'sass/adalida_page/cyph.scss'

const Define = () => {
  const problem = (
    <>
      <h1 className='caption'>The Problem</h1>
      Citizens United makes it difficult for voters to see who is financials sponsoring their local representatives.
      <h1 className='caption'>My Solution</h1>
      Provide a fast and easy way for people to learn about a politician&apos;s donors.
    </>
  )
  return (
    <Card title='// Define'>
      <ImageWithText image={designPhoto} text={problem} reversed={true} />
    </Card>
  )
}

export default Define
