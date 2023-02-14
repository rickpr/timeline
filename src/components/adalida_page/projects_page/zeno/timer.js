import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Timer = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; 02 | Timer</h3>
      <p>
        To address the need for timing rest pauses in time-under-tension focused
        workouts, a Floating Action Button (FAB) was added to display time
        remaining. The FAB follows the user throughout their experience,
        allowing Sarah to keep track of her time throughout her exercise.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/zeno/about.png' text={text} />
    </Card>
  )
}

export default Timer
