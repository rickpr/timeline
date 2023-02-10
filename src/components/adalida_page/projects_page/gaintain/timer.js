import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Timer = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h1>02 | Timer</h1>
      <h3>
        To address the need for timing rest pauses in time-under-tension focused
        workouts, a Floating Action Button (FAB) was added to display time
        remaining. The FAB follows the user throughout their experience,
        allowing Sarah to keep track of her time throughout her exercise.
      </h3>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/about.png' text={text} />
    </Card>
  )
}

export default Timer
