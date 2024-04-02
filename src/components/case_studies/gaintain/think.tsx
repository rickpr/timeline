import React from 'react'

import Card from './card'
import MediaWithText from '../../media_with_text'

const Think = (): JSX.Element => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; THINK</h3>
      <p>
        As part of the research phase for the GainTain app, a survey was
        conducted with a fitness enthusiast, Tina. Tina expressed her frustration
        with existing workout tracking apps and described her ideal workout tracking
        experience. Using the insights gathered from Tina and other users like her,
        I created a set of user personas to guide the development of GainTain.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/think.png' text={text} />
    </Card>
  )
}

export default Think
