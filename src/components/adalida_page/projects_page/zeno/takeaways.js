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
        The goal for this project was to design and prototype an e-commerce purchasing experience. In order for the experience to feel enjoyable, I need to focus on prototyping and animation for this project. I enjoyed challenging myself to learn small animations and Figma's prototyping features.
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
        <ScalableText text='Smart Animation' color='black' customStyles={customStyles} viewBoxWidthMultiplier={10} />
        <hr />
        <p className='garamond'>
          I learned how to create the animations in my prototype that I wanted while using Figma's prototype and smart animate features.
        </p>
      </div>
      <div>
        <ScalableText text='Organization' color='black' customStyles={customStyles} viewBoxWidthMultiplier={10} />
        <hr />
        <p className='garamond'>
          Before, I would design and and prototype in the same file, but I was limited with what I could animate without disrupting the design. For this project I designed my frames in one file and animated in another.
        </p>
      </div>
      <div>
        <ScalableText text='Communication' color='black' customStyles={customStyles} viewBoxWidthMultiplier={10} />
        <hr />
        <p className='garamond'>
          My prototype may not always match the production result, but it is good to use it as a test for the user and a reference for the engineer.
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