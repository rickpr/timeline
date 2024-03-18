import React, { useEffect, useRef, type CSSProperties, type SVGAttributes } from 'react'

import AnimatedPath, { type Animate } from 'components/animated_path'

/*
How to get a startPath and endPath:
Go here: https://www.blobmaker.app/
Copy a path element

Run it through this Ruby code:
```ruby
require 'nokogiri'

def translate_path(xml)
  html = Nokogiri.HTML(xml)
  path = html.css('path').first
  d = path.get_attribute('d')
  d.gsub(/[-\d\.]+/) { |f| ((Float(f) + 100) / 2).round(2) }
end
````
*/

interface Props {
  background: CSSProperties['color']
  gradientColor: CSSProperties['color']
  startPath: SVGAttributes<SVGPathElement>['d']
  endPath: SVGAttributes<SVGPathElement>['d']
}

let nextGradientId = 0

const Blob = ({ background, gradientColor, startPath, endPath }: Props): JSX.Element => {
  const gradientId = `blob-gradient-${nextGradientId++}`
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
          <linearGradient id={gradientId}>
            <stop offset='0%' stopColor={gradientColor} />
            <stop offset='100%' stopColor={background} />
          </linearGradient>
        </defs>
        <AnimatedPath
          startPath={startPath}
          endPath={endPath}
          dur='5s'
          fill={`url(#${gradientId})`}
          ref={animate}
        />
      </svg>
    </div>
  )
}

export default Blob
