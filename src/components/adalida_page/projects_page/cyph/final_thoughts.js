import React from 'react'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/cyph.scss'

const FinalThoughts = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

  const takeaways = (
    <div style={{ maxWidth: '80vw' }}>
      <h1>{'//'} Takeaways</h1>
    </div>
  )
  const thoughts = (
    <ResponsiveGrid customStyles={{ gap: '6%' }}>
      <div>
        <h1>Data in Design</h1>
        <hr />
        I learned how to leverage data as a resource for developing an information architecture and process flows.
      </div>
      <div>
        <h1>Design Systems</h1>
        <hr />
        I learned how to create a design system for consistent branding throughout my project.
      </div>
      <div>
        <h1>User Testing</h1>
        <hr />
        I learned that I can bias the results of my own project by not enough user testing and usability studies.
      </div>
      <div>
        <h1>Team vs. Self</h1>
        <hr />
        Self projects are great, but working with a team of developers and stakeholders,
        can elevate designs and the user&apos;s experience.
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
      The goal for this project was to give voters a tool to vote for a representative best aligned with their
      goals and interests.  It was an exciting opportunity designing, building, and createing an idea and turn it
      into a product. I am thankful I had the opportunity to work on a project aimed at helping my community and is
      intended to promote social good.
      {thoughts}
    </div>
    </Card>
  )
}

export default FinalThoughts
