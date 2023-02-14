import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const WorkoutLibrary = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; 04 | Workout Library</h3>
      <p>
        To provide a clear structure for workout videos, the app included an
        affordance for viewing video and written instructions. This allowed
        Sarah to access her Vimeo library with ease, improving her overall
        workout experience.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zeno/about.png' text={text} />
    </Card>
  )
}

export default WorkoutLibrary
