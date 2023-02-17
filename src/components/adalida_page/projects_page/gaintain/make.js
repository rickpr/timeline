import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Make = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; MAKE</h3>
      <p>
        A lean UX approach was adopted for the design and development of the
        minimum viable product (MVP) for GainTain, using Swift UI and a Figma
        Community iOS kit. The information architecture was based on the
        client&apos;s existing workout plan, which was updated throughout the
        design process.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/make.png' text={text} reversed />
    </Card>
  )
}

export default Make
