import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'

import 'sass/adalida_page/project.scss'

const Think = () => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <h3>&#47;&#47; THINK</h3>
      <p>
        The research phase of the design process for GainTain was aimed at
        understanding the client&apos;s needs and requirements for a
        comprehensive workout tracking app. The objectives of the research phase
        were to:
      </p>
      <p>
        <ol>
          <li>Determine the client&apos;s needs for tracking and completing workouts</li>
          <li>Conduct a small competitive analysis of existing workout tracking apps</li>
          <li>Identify the essential features needed for a comprehensive workout tracking app</li>
        </ol>
      </p>
      <p><strong>Methods</strong></p>
      <p>
        To achieve these objectives, a survey was conducted with the client to
        gather insights into her workout habits, tracking methods, and pain
        points with existing workout tracking apps. The survey also included
        questions aimed at conducting a small competitive analysis of existing
        apps.
      </p>

      <p><strong>Findings</strong></p>
      <p>The research found that the client needed four essential features for a comprehensive workout tracking app:</p>
      <p>
        <ol>
          <li>A way to see workouts for a specified day in the week</li>
          <li>A way to view exercises and their instructions (video or text)</li>
          <li>A way to track weight and repetition amount for each set of an exercise</li>
          <li>A timer for time-under-tension workouts.</li>
        </ol>
      </p>

      <p>Based on these findings, the design of GainTain was centered around
        these essential features to create a user-friendly and comprehensive
        workout tracking app that met the client&apos;s needs.
      </p>
    </div>
  )

  return (
    <Card>
      <MediaWithText media='images/gaintain/about.png' text={text} />
    </Card>
  )
}

export default Think
