import React from 'react'

import Card from '../card'
import SwiperCarousel from 'components/swiper_carousel'

import 'sass/adalida_page/cyph.scss'

const june23 = 'images/plato/research/june_23.png'
const june24 = 'images/plato/research/june_24.png'
const june28 = 'images/plato/research/june_28.png'
const june29 = 'images/plato/research/june_29.png'

const Understand = () => {
  const centerStyles = {
    placeContent: 'space-between center',
    placeItems: 'center center'
  }
  const text = (
    <div style={{ columnWidth: '80ch', width: '100%' }}>
      <p>
      I began by redesigning a dashboard with an already clear layout. A clear layout has clear and consistent spacing between elements, typography consistency, and is easily navigatable.
      </p>

      <p>
      When recreating the original image, I designed the frame as pixel perfect to the original design.
      </p>
      <p>
      As I added each component to the design, I focused on making each card responsive and reusable.
      </p>

    </div>
  )
  const carousel = <SwiperCarousel images={[june23, june24, june28, june29]} />
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    height: '100%',
    ...centerStyles
  }
  return (
    <Card title='// Layout - Design System '>
      <div style={style}>
        {text}
        {carousel}
      </div>
    </Card>
  )
}

export default Understand
