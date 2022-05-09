import React from 'react'

import Card from '../card'
import SwiperCarousel from 'components/swiper_carousel'

import 'sass/adalida_page/cyph.scss'

const userPersonaOne = 'images/cyph/research/user_persona_one.png'
const userPersonaTwo = 'images/cyph/research/user_persona_two.png'
const informationArchitecture = 'images/cyph/research/information_architecture.png'
const affinityDiagram = 'images/cyph/research/affinity_diagram.png'

const Understand = () => {
  const centerStyles = {
    placeContent: 'space-between center',
    placeItems: 'center center'
  }
  const text = (
    <div style={{ columnWidth: '80ch', width: '100%' }}>
      <p>
        My research focused on how voting works in the United States,
        why people don’t vote, what information is useful to voters,
        and why voting is important.
      </p>

      <p>
        I conducted phone interviews and began empathizing with voters by creating user personas.
      </p>
      <p>
        After, I created an affinity diagram and conducted a competitive audit where I learned about useful
        data sources posted publicly available for use like the Federal
        Election Committee (FEC) website and common pain points for voters.
      </p>

      <p>
        This is also where I began creating my information architecture.
      </p>
    </div>
  )
  const carousel = <SwiperCarousel images={[userPersonaOne, userPersonaTwo, informationArchitecture, affinityDiagram]} />
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: '100%',
    ...centerStyles
  }
  return (
    <Card title='// Understand & Empathize'>
      <div style={style}>
        {text}
        {carousel}
      </div>
    </Card>
  )
}

export default Understand
