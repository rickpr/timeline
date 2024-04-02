import React from 'react'

import Card from './card'
import MediaWithText from '../../media_with_text'

const Personalization = (): JSX.Element => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; Design for Everyone</h3>
      <p>
        Tina was particularly impressed with GainTain&apos;s customizable
        background color feature. She found it to be an inclusive feature
        that allowed her to engage with the app and make it her own, whether
        she was tracking weights, reps, or supersets.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/personalization.png' text={text} reversed />
    </Card>
  )
}

export default Personalization
