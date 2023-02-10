import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const PdfOfWorkouts = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h1>01 | PDF of Workouts</h1>
      <h3>
        To address the need for a way to view the current day&apos;s workout, a
        nested doll experience was provided. This allowed Sarah to focus solely
        on the current day&apos;s workout, making it easy to track and follow.
      </h3>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/about.png' text={text} reversed />
    </Card>
  )
}

export default PdfOfWorkouts
