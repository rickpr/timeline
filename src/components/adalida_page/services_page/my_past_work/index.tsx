import React, { useState } from 'react'

import { Works } from './works'
import Work from './work'

const MyPastWork = (): JSX.Element => {
  const [currentCard, setCurrentCard] = useState(0)
  return (
    <div className='my-past-work'>
      {Works.map((work, index) =>
        <Work
          key={work.name}
          work={work}
          active={currentCard === index}
          setCurrentCard={setCurrentCard}
        />
      )}
    </div>
  )
}

export default MyPastWork
