import React, { useState } from 'react'

import { Works } from 'work_themes'
import Work from './work'

const WorkKeys = Object.keys(Works)

const MyPastWork = (): JSX.Element => {
  const [currentCard, setCurrentCard] = useState(WorkKeys[0])
  return (
    <div className='my-past-work'>
      {WorkKeys.map(work =>
        <Work
          key={work}
          workKey={work}
          active={currentCard === work}
          setCurrentCard={setCurrentCard}
        />
      )}
    </div>
  )
}

export default MyPastWork
