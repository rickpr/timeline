import React from 'react'

import Card from '../card'
import { makeMediaTag } from '../../media_with_text'

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
        gridTemplateColumns: isMobile !== false ? '1fr' : 'repeat(2, minmax(0, 1fr))',
        columnGap: '6%',
        maxWidth: '100%',
        overflow: 'hidden',
        placeItems: 'center center'
      }}>
        <div style={{ maxWidth: '331px' }}>
          {makeMediaTag({ media: WorkoutLibraryVideo, style: { borderRadius: '60px' } })}
        </div>
        {text}
      </div>
    </Card>
  )
}

export default WorkoutLibrary
