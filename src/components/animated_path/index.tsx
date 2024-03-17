import React, { forwardRef, useImperativeHandle, useRef, type SVGAttributes } from 'react'

export type Path = SVGAttributes<SVGPathElement>['d']

interface Props {
  startPath: Path
  endPath: Path
  dur: SVGAttributes<SVGPathElement>['dur']
  fill?: SVGAttributes<SVGPathElement>['fill']
}

const animateProps = {
  begin: 'indefinite',
  attributeName: 'd',
  attributeType: 'XML',
  fill: 'freeze'
}

export interface Animate {
  animateForward: () => void
  animateReverse: () => void
}

const AnimatedPath = forwardRef((props: Props, ref: React.Ref<Animate>): JSX.Element => {
  const { startPath, endPath, dur, fill } = props
  const animateRef = useRef<SVGAnimateElement>(null)
  const animateReverseRef = useRef<SVGAnimateElement>(null)

  useImperativeHandle(ref, () => ({
    animateForward: () => { animateRef.current?.beginElement() },
    animateReverse: () => { animateReverseRef.current?.beginElement() }
  }))

  return (
    <path d={startPath} fill={fill}>
      <animate
        ref={animateRef}
        from={startPath}
        to={endPath}
        dur={dur}
        {...animateProps}
      />
      <animate
        ref={animateReverseRef}
        from={endPath}
        to={startPath}
        dur={dur}
        {...animateProps}
      />
    </path>
  )
})

AnimatedPath.displayName = 'AnimatedPath'

export default AnimatedPath
