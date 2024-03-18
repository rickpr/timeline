import React, { useEffect, useState } from 'react'

import { Works } from 'work_themes'
import NavigationButtons from './navigation_buttons'

interface Props {
  workKey: keyof typeof Works
  active: boolean
  setCurrentCard: React.Dispatch<React.SetStateAction<keyof typeof Works>>
}

const Work = ({ workKey, active, setCurrentCard }: Props): JSX.Element => {
  const [shown, setShown] = useState(active)
  const [hidden, setHidden] = useState(!active)
  const work = Works[workKey]
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
            {work.roles.slice(0, 2).map(badge => <div className='badge' key={badge}>{badge}</div>)}
          </div>
          <div className='work-badges-row'>
            {work.roles.slice(2).map(badge => <div className='badge' key={badge}>{badge}</div>)}
          </div>
        </div>
        <a className='work-link' href={work.link.url}>
          {work.link.text}&nbsp;<div className='rotated-arrow' />
        </a>
      </div>
      <div className='work-image'>
        <img src={work.coverPhoto} alt={work.name} />
        <NavigationButtons setCurrentCard={setCurrentCard} />
      </div>
    </div>
  )
}

export default Work
