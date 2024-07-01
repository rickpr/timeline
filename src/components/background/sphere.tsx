import React, { type CSSProperties } from 'react'

interface Props {
  background: CSSProperties['color']
  gradientColor: CSSProperties['color']
  animationDurationSeconds: number
  animationDelaySeconds: number
}

const Sphere = ({ background, gradientColor, animationDurationSeconds, animationDelaySeconds }: Props): JSX.Element => {
  const animationDuration = `${animationDurationSeconds}s`
  const animationDelay = `${animationDelaySeconds}s`
  return (
    <div className='sphere-container'>
      <div
        className='sphere-left-half'
        style={{ background: gradientColor, animationDuration, animationDelay }}
      />
      <div
        className='sphere-right-half'
        style={{ background, animationDuration, animationDelay }}
      />
    </div>
  )
}

export default Sphere
