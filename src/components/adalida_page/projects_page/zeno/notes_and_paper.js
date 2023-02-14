import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const NotesAndPaper = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; 03 | Notes / Paper</h3>
      <p>
        Sarah needed an efficient way to track weight and repetition amount for
        each set of her exercises. A stepper was designed to display
        Sarah&apos;s previous data and provide easy
        increase/decrease affordances for the weight.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zeno/about.png' text={text} reversed />
    </Card>
  )
}

export default NotesAndPaper
