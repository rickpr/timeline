import React from 'react'

import CaptionedFigure from 'components/captioned_figure'
import Card from '../card'
import { makeMediaTag } from '../media_with_text'

import useIsMobile from 'hooks/use_is_mobile'

import PdfOfWorkoutsVideo from 'videos/gaintain/pdf_of_workouts.mp4'

import 'sass/adalida_page/project.scss'

const PdfOfWorkouts = (): JSX.Element => {
  const isMobile = useIsMobile(1200)
  const centerStyles = { placeItems: 'center center' }
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile !== false ? '1fr' : 'repeat(3, minmax(0, 1fr))',
        columnGap: '6%',
        maxWidth: '100%',
        overflow: 'hidden',
        ...centerStyles
      }}>
        <CaptionedFigure caption='Before' figure={makeMediaTag({ media: 'gaintain/pdf_of_workouts/program.png' })} />
        {text}
        <div style={{ maxWidth: '331px' }}>
          <CaptionedFigure caption='After' figure={makeMediaTag({ media: PdfOfWorkoutsVideo })} />
        </div>
      </div>
    </Card>
  )
}

export default PdfOfWorkouts
