import React, { useEffect, useState, type CSSProperties } from 'react'

interface Props {
  background: CSSProperties['color']
  gradientColor: CSSProperties['color']
}

const path1 = `
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

const path2 = `
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
  const gradientId = crypto.randomUUID()
  const [path, setPath] = useState(path1)
  useEffect(() => {
    const interval = setInterval(() => {
      setPath(path === path1 ? path2 : path1)
    }, 5000)
    return () => { clearInterval(interval) }
  }, [path])
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg viewBox='0 0 100 100'>
        <defs>
          <radialGradient id={gradientId} cx='33%' cy='33%'>
            <stop offset='0%' stopColor={gradientColor} />
            <stop offset='100%' stopColor={background} />
          </radialGradient>
        </defs>
        <path
          style={{ transition: 'd 5s' }}
          fill={`url(#${gradientId})`}
          d={path}
        />
      </svg>
    </div>
  )
}

export default Sphere
