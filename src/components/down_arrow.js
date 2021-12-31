import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

const DownArrow = ({ scrollTarget }) => {
  const { arrowTop, arrowBottom, circleColor, fill } = useContext(ThemeContext)
  const arrowAttributes = { stroke: 'url(#down-arrow-gradient)', strokeWidth: 2.75, strokeLinecap: 'round', strokeLinejoin: 'round' }

  return (
    <div style={{ width: 'min(15%, calc(100vw - 175%))', cursor: 'pointer' }}>
    <svg
      width='100%'
      viewBox='-1 -1 67 67'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={() => scrollTarget.current?.scrollIntoView({ behavior: 'smooth' })}
    >
      <title>Down arrow</title>
      <defs>
        <linearGradient id='down-arrow-gradient' gradientUnits='userSpaceOnUse'>
          <stop offset='0%' stopColor={arrowTop}/>
          <stop offset='100%' stopColor={arrowBottom} />
        </linearGradient>
      </defs>
      <circle cx='32.5' cy='32.5' r='32' fill={fill} stroke={circleColor} strokeWidth='3' />
      <path d='M32.5 18.41667V44.0833' {...arrowAttributes} />
      <path d='M43.5 35.33333L32.5 45.3333' {...arrowAttributes} />
      <path d='M21.5 35.33333L32.5 45.3333' {...arrowAttributes} />
    </svg>
    </div>
  )
}

DownArrow.propTypes = {
  scrollTarget: PropTypes.shape({ current: PropTypes.node })
}

export default DownArrow
