import React, { useState } from 'react'

import { Works } from './works'
import Work from './work'
import NavigationButtons from './navigation_buttons'

const MyPastWork = (): JSX.Element => {
  const [currentCard, setCurrentCard] = useState(0)
  const translateXpx = `${-950 * currentCard}px`
  const translateXdvw = `${-85 * currentCard}dvw`

  return (
    <div style={{ overflowX: 'hidden', height: '100dvh' }}>
      <div style={{ display: 'flex', transition: 'all 0.5s ease-in-out', transform: `translateX(min(${translateXpx}, ${translateXdvw}))` }}>
        {Works.map(work => <Work key={work.name} work={work} />)}
      </div>
      <NavigationButtons currentCard={currentCard} setCurrentCard={setCurrentCard} numberOfCards={5} />
    </div>
  )
}

export default MyPastWork
