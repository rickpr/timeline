import React from 'react'

import CaptionedFigure from 'components/captioned_figure'
import Card from '../card'
import { makeMediaTag } from '../media_with_text'

import useIsMobile from 'hooks/use_is_mobile'

import PickerVideo from 'videos/gaintain/pdf_of_workouts/picker.mp4'

const WorkoutLibrary = () => {
  const isMobile = useIsMobile(1200)
  const text = (
    <div>
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
        columnGap: '6%',
        maxWidth: '100%',
        overflow: 'hidden',
        placeItems: 'center center'
      }}>
        <CaptionedFigure caption='Before' figure={makeMediaTag({ media: 'gaintain/workout_library.png' })} />
        {text}
        <div style={{ maxWidth: '331px' }}>
          <CaptionedFigure caption='After' figure={makeMediaTag({ media: PickerVideo })} />
        </div>
      </div>
    </Card>
  )
}

export default WorkoutLibrary
