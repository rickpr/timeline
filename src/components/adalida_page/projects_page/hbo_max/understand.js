import React from 'react'

import Card from '../card'
import SwiperCarousel from 'components/swiper_carousel'

import 'sass/adalida_page/cyph.scss'

const userPersonaOne = 'images/hbo_max/research/user_persona_one.png'
const userPersonaTwo = 'images/hbo_max/research/user_persona_two.png'
const informationArchitecture = 'images/hbo_max/research/information_architecture.png'

const Understand = () => {
  const centerStyles = {
    placeContent: 'space-between center',
    placeItems: 'center center'
  }
  const text = (
    <div style={{ columnWidth: '80ch', width: '100%' }}>
      <p>
        For my research, I used the HBOMax subreddit to find user frustrations and pain points.
        A consistent pain point reddit users experienced was trouble fast-forwarding and rewinding while watching a title.
      </p>

      <p>
        This coupled with phone interview helped me understand why people where frustrated with the HBOMax streaming service.
      </p>
      <p>
        After, I used my qualitative research to create user personas and understand the pain points and how to solve them.
      </p>

      <p>
        With a strong understanding of the users frustrations, I created a strong information architecture grounded in research and began designing in high-fidelity.
      </p>
    </div>
  )
  const carousel = <SwiperCarousel images={[userPersonaOne, userPersonaTwo, informationArchitecture]} />
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
