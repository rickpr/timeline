import React from 'react'

import WorkoutLibraryVideo from 'videos/gaintain/workout_library.mp4'

import Card from './card'
import { makeMediaTag } from '../../media_with_text'
import { videoBorderRadius } from './style'

const WorkoutLibrary = (): JSX.Element => {
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
      <div className='video-card-content reverse'>
        {text}
        <div className='video-card-video'>
          {makeMediaTag({ media: WorkoutLibraryVideo, style: { borderRadius: videoBorderRadius } })}
        </div>
      </div>
    </Card>
  )
}

export default WorkoutLibrary
