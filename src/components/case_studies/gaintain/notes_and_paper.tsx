import React from 'react'

import IncrementVideo from 'videos/gaintain/notes_and_paper.mp4'

import { makeMediaTag } from '../../media_with_text'
import Card from './card'
import { videoBorderRadius } from './style'

const NotesAndPaper = (): JSX.Element => {
  const text = (
    <div>
      <h3>&#47;&#47; 02 | Notes / Paper</h3>
      <p>
        With GainTain&apos;s page controls, Sarah can hyper-focus on her current
        workout and track her progress easily using steppers that display her
        previous weight and repetition data.
      </p>
    </div>
  )

  return (
    <Card>
      <div className='video-card-content reverse'>
        {text}
        <div style={{ maxWidth: '331px' }}>
          {makeMediaTag({ media: IncrementVideo, style: { borderRadius: videoBorderRadius } })}
        </div>
      </div>
    </Card>
  )
}

export default NotesAndPaper
