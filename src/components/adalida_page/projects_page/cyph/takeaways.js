import React from 'react'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/project.scss'

const Takeaways = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

  const takeaways = (
    <div style={{ maxWidth: '80vw' }}>
      <p>
        The goal for this project was to give voters a tool to vote for a
        representative best aligned with their goals and interests.
        I enjoyed designing a product from an idea with the aim of solving a
        person&apos;s problem or need. As a solo project I was able to create a
        product that was easy to use and intuitive. I am thankful I had the
        opportunity to work on a project aimed at helping my community and I
        hope to work on more projects like this.
      </p>
    </div>
  )

  const thoughts = (
    <ResponsiveGrid breakpoint='30ch' customStyles={{ columnGap: '6%', marginTop: '2em' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Data in Design</h1>
        <p>
          I learned how to leverage data as a resource for developing an information architecture and process flows.
        </p>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Design Systems</h1>
        <p>
          I learned how to create a design system for consistent branding throughout my project.
          Figma&apos;s design libraries make it easy to create and use a color system and font family when designing.
        </p>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>User Testing</h1>
        <p>
          I learned that I can bias the results of my own project by not enough user testing and usability studies.
        </p>
      </div>
    </ResponsiveGrid>
  )
  const style = {
    display: 'grid',
    fontFamily: 'Futura',
    gridTemplateColumns: '1fr',
    width: '90%',
    height: '100%',
    margin: '0 auto',
    ...centerStyles
  }
  return (
    <Card>
      <h1>&#47;&#47; Takeaways</h1>
      <div style={style}>
        {takeaways}
        {thoughts}
      </div>
    </Card>
  )
}

export default Takeaways
