import React from 'react'

import Card from '../card'
import CaptionedFigure from 'components/captioned_figure'
import { makeMediaTag } from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Check = () => {
  const flex = '8 8 335px'
  const padding = '1em'
  const text = (
    <div key='text' style={{ display: 'flex', flex, placeContent: 'center', placeItems: 'center', padding }}>
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
    </div>
  )

  const mediaTag = makeMediaTag({ media: 'images/gaintain/check.png' })
  const figmaLink = (
    <a
      href='https://www.figma.com/proto/p9h30Mv9nEaMXP9CEaMJTz/GainTain-Creative-Process?page-id=0%3A1&node-id=283%3A652&viewport=-398%2C-458%2C0.1&scaling=contain&starting-point-node-id=283%3A652'
      target='_blank'
      rel='noreferrer'
    >
      Creative Process
    </a>
  )

  return (
    <Card>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        placeContent: 'center',
        placeItems: 'center',
        margin: '0 auto',
        maxWidth: 'max-content'
      }}>
        <div
          style={{ display: 'flex', flex, placeContent: 'center', placeItems: 'center', maxWidth: 'max-content', padding }}
        >
          <CaptionedFigure caption={figmaLink} figure={mediaTag} />
        </div>
        {text}
      </div>
    </Card>
  )
}

export default Check
