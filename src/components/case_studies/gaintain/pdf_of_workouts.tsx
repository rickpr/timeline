import React from 'react'

import Card from './card'
import { videoBorderRadius } from './style'
import { makeMediaTag } from '../../media_with_text'

import PdfOfWorkoutsVideo from 'videos/gaintain/pdf_of_workouts.mp4'

const PdfOfWorkouts = (): JSX.Element => {
  const text = (
    <div>
      <h3>&#47;&#47; 01 | PDF of Workouts</h3>
      <p>
        GainTain&apos;s nested doll architecture eliminates the need for Sarah to
        keep her workout plan pdf open. She can now focus solely on her
        current day&apos;s workout.
      </p>
    </div>
  )

  return (
    <Card>
      <div className='video-card-content'>
        {text}
        <div className='video-card-video'>
          {makeMediaTag({ media: PdfOfWorkoutsVideo, style: { borderRadius: videoBorderRadius } })}
        </div>
      </div>
    </Card>
  )
}

export default PdfOfWorkouts
