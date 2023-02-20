import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Personalization = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; A design fit for everyone.</h3>
      <p>
        The customizable background color feature of GainTain&apos;s UI design
        allows users to engage with the app and make it their own. This
        inclusive feature caters to all types of users, whether they&apos;re
        tracking weights, reps, or supersets.
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
