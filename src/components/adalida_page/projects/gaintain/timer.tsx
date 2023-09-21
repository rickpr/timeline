import React from 'react'

import CaptionedFigure from 'components/captioned_figure'
import Card from '../card'
import { makeMediaTag } from '../media_with_text'

import useIsMobile from 'hooks/use_is_mobile'

import TimerVideo from 'videos/gaintain/timer.mp4'

import 'sass/adalida_page/project.scss'

const Timer = (): JSX.Element => {
  const isMobile = useIsMobile(1200)
  const text = (
    <div>
      <h3>&#47;&#47; 03 | Timer</h3>
      <p>
        GainTain&apos;s timer feature allows Sarah to easily track her rest
        pauses during her time under tension workouts, without having to switch
        between multiple apps.
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
        <CaptionedFigure caption='Before' figure={makeMediaTag({ media: 'gaintain/timer.png' })} />
        {text}
        <div style={{ maxWidth: '331px' }}>
          <CaptionedFigure caption='After' figure={makeMediaTag({ media: TimerVideo, style: { borderRadius: '60px' } })} />
        </div>
      </div>
    </Card>
  )
}

export default Timer
