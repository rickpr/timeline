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
        The goal for this project was to design and prototype an e-commerce purchasing experience. In order for the experience to feel enjoyable and seamless, I needed to focus on prototyping and interaction design for this project. My information architecture helped me organize my thoughts and keep track of where interactions will be needed. Overall, this project was fun to work on and helps women enjoy their shopping experience.
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
        <ScalableText text='Prototyping' color='black' customStyles={customStyles} viewBoxWidthMultiplier={10} />
        <hr />
        <p className='garamond'>
          I learned how to create interactions in my prototype which enabled users to enjoy their shopping experience. Figma's smart animation and the ability to add GIF's enabled me to create such an experience.
        </p>
      </div>
      <div>
        <ScalableText text='Organization' color='black' customStyles={customStyles} viewBoxWidthMultiplier={10} />
        <hr />
        <p className='garamond'>
          Before, I would design and prototype in the same file, but I was limited with what I could animate without comprising the design. Zeno's file structure was set up differently. I first designed my frames in one file and animated in another file giving me more flexibility and options for interaction designs.
        </p>
      </div>
      <div>
        <ScalableText text='Testing' color='black' customStyles={customStyles} viewBoxWidthMultiplier={10} />
        <hr />
        <p className='garamond'>
          Zeno required several rounds of in-person usability studies. From these studies, I was able to see where users where getting stuck and what designs and prototype features needed to be adjusted. Usability studies are vital for ensuring the best insight into the problems users are having with the product.
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