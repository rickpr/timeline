import React from 'react'

import CaptionedFigure from 'components/captioned_figure'
import Card from '../card'
import { makeMediaTag } from '../media_with_text'

import useIsMobile from 'hooks/use_is_mobile'

import IncrementVideo from 'videos/gaintain/notes_and_paper.mp4'

import 'sass/adalida_page/project.scss'

const NotesAndPaper = () => {
  const isMobile = useIsMobile(1200)
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
        columnGap: '6%',
        maxWidth: '100%',
        overflow: 'hidden',
        placeItems: 'center center'
      }}>
        <CaptionedFigure caption='Before' figure={makeMediaTag({ media: 'gaintain/notes_and_paper.png' })} />
        {text}
        <div style={{ maxWidth: '331px' }}>
          <CaptionedFigure caption='After' figure={makeMediaTag({ media: IncrementVideo })} />
        </div>
      </div>
    </Card>
  )
}

export default NotesAndPaper
