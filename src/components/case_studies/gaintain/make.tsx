import React from 'react'

import Card from './card'
import MediaWithText from '../../media_with_text'

const Make = (): JSX.Element => {
  const text = (
    <div className='gaintain-text'>
      <h3>&#47;&#47; MAKE</h3>
      <p>
        I adopted a Lean UX approach for the development of the GainTain MVP.
        Using FigJam, the team quickly created an information architecture and user
        flow that reflected the needs of the user personas. As the design progressed,
        Tina, and other users provided feedback that was used to iterate and refine the app.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/make.webp' text={text} reversed />
    </Card>
  )
}

export default Make
