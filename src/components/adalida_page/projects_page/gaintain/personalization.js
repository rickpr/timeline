import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Personalization = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; Personalization</h3>
      <p>A design fit for everyone.</p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/personalization.png' text={text} reversed />
    </Card>
  )
}

export default Personalization
