import React from 'react'

import CaptionedFigure from 'components/captioned_figure'
import Card from '../card'
import { makeMediaTag } from '../media_with_text'

import useIsMobile from 'hooks/use_is_mobile'

import PickerVideo from 'videos/gaintain/pdf_of_workouts/picker.mp4'

import 'sass/adalida_page/project.scss'

const PdfOfWorkouts = () => {
  const isMobile = useIsMobile(1200)
  const centerStyles = { placeItems: 'center center' }
  const text = (
    <div>
      <h3>&#47;&#47; 01 | PDF of Workouts</h3>
      <p>
        To address the need for a way to view the current day&apos;s workout, a
        nested doll experience was provided. This allowed Sarah to focus solely
        on the current day&apos;s workout, making it easy to track and follow.
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
        ...centerStyles
      }}>
        <CaptionedFigure caption='Before' figure={makeMediaTag({ media: 'gaintain/pdf_of_workouts/program.png' })} />
        {text}
        <div style={{ maxWidth: '331px' }}>
          <CaptionedFigure caption='After' figure={makeMediaTag({ media: PickerVideo })} />
        </div>
      </div>
    </Card>
  )
}

export default PdfOfWorkouts
