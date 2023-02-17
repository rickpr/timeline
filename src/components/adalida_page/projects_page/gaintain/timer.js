import React from 'react'

import CaptionedFigure from 'components/captioned_figure'
import Card from '../card'
import { makeMediaTag } from '../media_with_text'

import useIsMobile from 'hooks/use_is_mobile'

import IncrementVideo from 'videos/gaintain/notes_and_paper.mp4'

import 'sass/adalida_page/project.scss'

const Timer = () => {
  const isMobile = useIsMobile(1200)
  const text = (
    <div>
      <h3>&#47;&#47; 02 | Timer</h3>
      <p>
        To address the need for timing rest pauses in time-under-tension focused
        workouts, a Floating Action Button (FAB) was added to display time
        remaining. The FAB follows the user throughout their experience,
        allowing Sarah to keep track of her time throughout her exercise.
      </p>
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
        columnGap: '6%',
        maxWidth: '100%',
        overflow: 'hidden',
        placeItems: 'center center'
      }}>
        <CaptionedFigure caption='Before' figure={makeMediaTag({ media: 'gaintain/timer.png' })} />
        {text}
        <div style={{ maxWidth: '331px' }}>
          <CaptionedFigure caption='After' figure={makeMediaTag({ media: IncrementVideo })} />
        </div>
      </div>
    </Card>
  )
}

export default Timer
