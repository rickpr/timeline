import React from 'react'

import userPersonaOne from 'images/cyph/research/user_persona_one.png'
import userPersonaTwo from 'images/cyph/research/user_persona_two.png'
import informationArchitecture from 'images/cyph/research/information_architecture.png'
import affinityDiagram from 'images/cyph/research/affinity_diagram.png'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'
import SwiperCarousel from 'components/swiper_carousel'

import 'sass/adalida_page/cyph.scss'

const Understand = () => {
  const centerStyles = {
    placeContent: 'space-between center',
    placeItems: 'center center'
  }
  const text = (
    <ResponsiveGrid customStyles={{ gap: '6%' }} breakpoint='30vw'>
      <div>
        <p>
          My research focused on how voting works in the United States,
          why people don’t vote, what information is useful to voters,
          and why voting is important.
        </p>

        <p>
          I conducted phone interviews and began empathizing with voters by
          conducting phone interviews and creating user personas.
        </p>
      </div>
      <div>
        <p>
          After, I conducted a competitive audit and learned about useful
          data sources posted publicly available for use like the Federal
          Election Commitee (FEC) website.
        </p>

        <p>
          This is also where I began creating my information architecture and a process flow.
        </p>
      </div>
    </ResponsiveGrid>
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
