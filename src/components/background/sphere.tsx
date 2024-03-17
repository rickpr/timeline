import React, { useEffect, useRef, type CSSProperties } from 'react'

import AnimatedPath, { type Animate } from 'components/animated_path'

interface Props {
  background: CSSProperties['color']
  gradientColor: CSSProperties['color']
}

const startPath = `
M 0 50
Q 0 100 50 100
Q 100 100 100 85
Q 100 80 90 70
Q 80 60 80 50
Q 80 40 90 30
Q 100 20 100 15
Q 100 0 50 0
Q 0 0 0 50
Z
`

const endPath = `
M 20 50
Q 20 60 10 70
Q 0 80 0 85
Q 0 100 50 100
Q 100 100 100 50
Q 100 0 50 0
Q 0 0 0 15
Q 0 20 10 30
Q 20 40 20 50
Z
`

const Sphere = ({ background, gradientColor }: Props): JSX.Element => {
  const gradientId = Date.now().toString()
  const animate = useRef<Animate>(null)
  useEffect(() => {
    let forward = false
    const interval = setInterval(() => {
      forward ? animate.current?.animateForward() : animate.current?.animateReverse()
      forward = !forward
    }, 5000)
    animate.current?.animateForward()
    return () => { clearInterval(interval) }
  }, [])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg viewBox='0 0 100 100' >
        <defs>
          <radialGradient id={gradientId} cx='33%' cy='33%'>
            <stop offset='0%' stopColor={gradientColor} />
            <stop offset='100%' stopColor={background} />
          </radialGradient>
        </defs>
        <AnimatedPath
          startPath={startPath}
          endPath={endPath}
          dur={'5s'}
          fill={`url(#${gradientId})`}
          ref={animate}
        />
      </svg>
    </div>
  )
}

export default Sphere
