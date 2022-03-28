import React from 'react'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'
import ScalableText from 'components/scalable_text'

import 'sass/adalida_page/cyph.scss'

const FinalThoughts = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

  const takeaways = (
    <div style={{ maxWidth: '80vw' }}>
      <h1 style={{ textAlign: 'center' }}>{'//'} Takeaways</h1>
      <br />
      <p>
        The goal for this project was to give voters a tool to vote for a representative best aligned with their
        goals and interests.  It was an exciting opportunity designing, building, and createing an idea and turn it
        into a product. I am thankful I had the opportunity to work on a project aimed at helping my community and is
        intended to promote social good.
      </p>
    </div>
  )

  const customStyles = {
    width: '100%',
    height: '30%'
  }
  const thoughts = (
    <ResponsiveGrid breakpoint='30ch' customStyles={{ gap: '6%', marginTop: '2em' }}>
      <div>
        <ScalableText text='Data in Design' color='black' customStyles={customStyles} />
        <hr />
        <p>
          I learned how to leverage data as a resource for developing an information architecture and process flows.
        </p>
      </div>
      <div>
        <ScalableText text='Design Systems' color='black' customStyles={customStyles} />
        <hr />
        <p>
          I learned how to create a design system for consistent branding throughout my project.
        </p>
      </div>
      <div>
        <ScalableText text='User Testing' color='black' customStyles={customStyles} />
        <hr />
        <p>
          I learned that I can bias the results of my own project by not enough user testing and usability studies.
        </p>
      </div>
      <div>
        <ScalableText text='Team vs. Self' color='black' customStyles={customStyles} />
        <hr />
        <p>
          Self projects are great, but working with a team of developers and stakeholders,
          can elevate designs and the user&apos;s experience.
        </p>
      </div>
    </ResponsiveGrid>
  )
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '90%',
    height: '100%',
    margin: '0 auto',
    ...centerStyles
  }
  return (
    <Card title='Final Thoughts'>
    <div style={style}>
      {takeaways}

      {thoughts}
    </div>
    </Card>
  )
}

export default FinalThoughts
