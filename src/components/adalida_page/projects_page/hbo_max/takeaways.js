import React from 'react'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'
import ScalableText from 'components/scalable_text'

import 'sass/adalida_page/cyph.scss'

const Takeaways = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

  const takeaways = (
    <div style={{ maxWidth: '80vw' }}>
      <p>
        The goal for this project was to improve the user experience and design around major pain points. I worked towards that goal by conducting user research from my close network and by utilizing online forums for helpful feedback.
        I enjoyed designing a streaming service product and using online comments as a way to conduct user research.
        I also enjoyed working on a product that was user-friendly and for fun and entertainment.
      </p>
    </div>
  )

  const customStyles = {
    width: '100%',
    height: '30%'
  }
  const thoughts = (
    <ResponsiveGrid breakpoint='30ch' customStyles={{ columnGap: '6%', marginTop: '2em' }}>
      <div>
        <ScalableText text='User Research' color='black' customStyles={customStyles} viewBoxWidthMultiplier={10} />
        <hr />
        <p className='garamond'>
          I focused on my user research to drive to my designs which increased the speed of my designs. I understood what key features the user needed and the design came organically.
        </p>
      </div>
      <div>
        <ScalableText text='Performance' color='black' customStyles={customStyles} viewBoxWidthMultiplier={10} />
        <hr />
        <p className='garamond'>
          I focused on easing the pain for the users when forwarding or rewinding, but to fully fix the problem, I would need to pair with an engineer to improve the performance optimization.
        </p>
      </div>
      <div>
        <ScalableText text='Auto Layout' color='black' customStyles={customStyles} viewBoxWidthMultiplier={10} />
        <hr />
        <p className='garamond'>
          I learned how to set up my designs using components and auto layout. This is helpful for prototyping, design iteration, and responsive web design.
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
