import React, { useEffect, useState } from 'react'

import type { Work as WorkType } from './works'
import NavigationButtons from './navigation_buttons'

interface Props {
  work: WorkType
  active: boolean
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>
}

const Work = ({ work, active, setCurrentCard }: Props): JSX.Element => {
  const [shown, setShown] = useState(active)
  const [hidden, setHidden] = useState(!active)
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (active) {
      setShown(true)
      timeout = setTimeout(() => { setHidden(false) }, 500)
    } else {
      setHidden(true)
      timeout = setTimeout(() => { setShown(false) }, 500)
    }
    return () => { clearTimeout(timeout) }
  }, [active])

  return (
    <div className={`work ${shown ? 'shown' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className='work-title'>
        <div className='work-name'>{work.name}</div>
        <div className='work-badges-container'>
          <div className='work-badges-row'>
            {work.badges.slice(0, 2).map(badge => <div className='glass badge' key={badge}>{badge}</div>)}
          </div>
          <div className='work-badges-row'>
            {work.badges.slice(2).map(badge => <div className='glass badge' key={badge}>{badge}</div>)}
          </div>
        </div>
        <a className='work-link' href={work.url}>
          Visit website <div className='rotated-arrow' />
        </a>
      </div>
      <div className='work-image'>
        <img src={work.coverImage} alt={work.name} />
        <NavigationButtons setCurrentCard={setCurrentCard} />
      </div>
    </div>
  )
}

export default Work
