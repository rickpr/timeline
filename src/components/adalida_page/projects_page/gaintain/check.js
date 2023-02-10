import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Check = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; CHECK</h3>
      <p>
        The hi-fidelity design process allowed for a basic version of the app
        to be up and running in a matter of hours, using the iOS component kit
        available on Figma Community. Over the next 2 months, the app was
        iteratively improved to enhance its functionality, usability, and
        design, based on areas for improvement identified through user
        feedback and testing.
        These incremental changes resulted in a final polished and user-friendly
        product.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/about.png' text={text} />
    </Card>
  )
}

export default Check
