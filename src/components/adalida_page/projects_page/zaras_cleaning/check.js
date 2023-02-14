import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Check = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; UI Design</h3>
      <p>
        Once the usability issues were resolved, I moved on to design the final
        screens in Figma. My goal was to create a visual identity that’s aligned
        with the brand’s values and message, which is: “brand motto”. Also, I’ve
        checked the competition and took a deep dive into my catalog of
        references for inspiration.
        <ul>
          <li>What kind of visual style did you follow and why? (Fresh, corporate, dark, light?)</li>
          <li>Did you follow any popular guidelines? (Material Design, iOS Styleguide, etc?)</li>
          <li>What platforms and devices did you design for?</li>
          <li>How does your final design reflect your learnings about your users?</li>
        </ul>
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zaras_cleaning/check.png' text={text} reversed />
    </Card>
  )
}

export default Check
