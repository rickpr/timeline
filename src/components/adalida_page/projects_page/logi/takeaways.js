import React from 'react'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/cyph.scss'

const Takeaways = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

  const takeaways = (
    <div style={{ maxWidth: '80vw' }}>
      <p>
        The goal for this project was to design a desktop product using an already existing design system. Typically, I create my own design systems, but I wanted to challenge myself by using design systems from different organiztions to practice implementing consistent branding and brand identity.
      </p>
    </div>
  )

  const thoughts = (
    <ResponsiveGrid breakpoint='30ch' customStyles={{ columnGap: '6%', marginTop: '2em' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Planning</h1>
        <hr />
        <p className='garamond'>
        I broke up my designs by layout and color. This helped me plan and manage my project out, which helped me design faster. I usually choose three designs I like and implement different elements and features from each design. This time I decided to design by choosing two design systems, one for layout and one for color.
        </p>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Design System</h1>
        <hr />
        <p className='garamond'>
        A design system isn't simply about setting the design system features in Figma, it's about knowing where to use what and when. This includes things like spacing, font, color, and layout.
        </p>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>ADA Compliant</h1>
        <hr />
        <p className='garamond'>
        I designed my mockup in monochormatic, which highlighted the contrast and readability between elements. After ensuring readability and use for all users, it was easy to apply things like color and shading to my elements.
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
    <Card title='// Takeaways'>
      <div style={style}>
        {takeaways}
        {thoughts}
      </div>
    </Card>
  )
}

export default Takeaways
