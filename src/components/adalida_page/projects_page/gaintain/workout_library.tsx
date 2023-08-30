import React from 'react'

import CaptionedFigure from 'components/captioned_figure'
import Card from '../card'
import { makeMediaTag } from '../media_with_text'

import useIsMobile from 'hooks/use_is_mobile'

import WorkoutLibraryVideo from 'videos/gaintain/workout_library.mp4'

const WorkoutLibrary = (): JSX.Element => {
  const isMobile = useIsMobile(1200)
  const text = (
    <div>
      <h3>&#47;&#47; 04 | Workout Library</h3>
      <p>
        GainTain&apos;s user-friendly design allows Sarah to quickly access
        video instructions for her workouts, without having to search through a
        disorganized list.
      </p>
    </div>
  )

  return (
    <Card>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile !== false ? '1fr' : 'repeat(3, minmax(0, 1fr))',
        columnGap: '6%',
        maxWidth: '100%',
        overflow: 'hidden',
        placeItems: 'center center'
      }}>
        <CaptionedFigure caption='Before' figure={makeMediaTag({ media: 'gaintain/workout_library.png' })} />
        {text}
        <div style={{ maxWidth: '331px' }}>
          <CaptionedFigure caption='After' figure={makeMediaTag({ media: WorkoutLibraryVideo, style: { borderRadius: '60px' } })} />
        </div>
      </div>
    </Card>
  )
}

export default WorkoutLibrary
