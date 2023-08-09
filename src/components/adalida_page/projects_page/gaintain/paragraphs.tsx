import React from 'react'

import Card from '../card'

import 'sass/adalida_page/project.scss'

const Paragraphs = (): JSX.Element => {
  const text = (
    <div className='project-outer-paragraphs'>
      <div className='project-inner-paragraphs'>
        <div className='project-individual-paragraph'>
          <h3>Solve the Source not the Symptom</h3>
          <p>
            The original problem of not having an easy way to track workout
            progress was actually a symptom of a larger issue - the tedious
            process of switching from paper tracking to app tracking and back.
            The true problem being solved was finding a streamlined solution for
            this workflow.
          </p>
        </div>
        <div className='project-individual-paragraph'>
          <h3>Supporting Roles for Designers</h3>
          <p>
            Project Managers can be particularly helpful when creating PRDs
            (Product Requirements Documents), as they can contribute to a better
            outcome at various stages of the implementation and design process.
          </p>
        </div>
      </div>
      <div className='project-inner-paragraphs'>
        <div className='project-individual-paragraph'>
          <h3>Design Libraries and Components</h3>
          <p>
            Using Apple&apos;s iOS components in this project, I was introduced
            to Figma&apos;s iOS library and learned about the components and
            their functions.
          </p>
        </div>
        <div className='project-individual-paragraph'>
          <h3>Lean UX vs. Other Agile Methods</h3>
          <p>
            Resource constraints and time can dictate the choice of
            user-centered design method or approach.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <Card>
      {text}
      <h3>Thank you for reading my case study!</h3>
      <p>
        Want to work with me? Feel free to contact me!
        ...or just say hello on my social media.
      </p>
    </Card>
  )
}

export default Paragraphs
