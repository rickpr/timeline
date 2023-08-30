import React, { useEffect, useRef } from 'react'

const Icon = ({ darkMode }: { darkMode: boolean }): JSX.Element => {
  const animateProps = {
    begin: 'indefinite',
    attributeName: 'd',
    attributeType: 'XML',
    dur: '250ms',
    fill: 'freeze'
  }

  const innerMoonAnimate = useRef<SVGAnimateElement>(null)
  const outerMoonAnimate = useRef<SVGAnimateElement>(null)
  const star1Animate = useRef<SVGAnimateElement>(null)
  const star2Animate = useRef<SVGAnimateElement>(null)
  const star3Animate = useRef<SVGAnimateElement>(null)
  const star4Animate = useRef<SVGAnimateElement>(null)
  const planet1Animate = useRef<SVGAnimateElement>(null)
  const planet2Animate = useRef<SVGAnimateElement>(null)
  const planet3Animate = useRef<SVGAnimateElement>(null)
  const planet4Animate = useRef<SVGAnimateElement>(null)

  const innerMoonAnimateReverse = useRef<SVGAnimateElement>(null)
  const outerMoonAnimateReverse = useRef<SVGAnimateElement>(null)
  const star1AnimateReverse = useRef<SVGAnimateElement>(null)
  const star2AnimateReverse = useRef<SVGAnimateElement>(null)
  const star3AnimateReverse = useRef<SVGAnimateElement>(null)
  const star4AnimateReverse = useRef<SVGAnimateElement>(null)
  const planet1AnimateReverse = useRef<SVGAnimateElement>(null)
  const planet2AnimateReverse = useRef<SVGAnimateElement>(null)
  const planet3AnimateReverse = useRef<SVGAnimateElement>(null)
  const planet4AnimateReverse = useRef<SVGAnimateElement>(null)

  const animateForward = (): void => {
    innerMoonAnimate.current?.beginElement()
    outerMoonAnimate.current?.beginElement()
    star1Animate.current?.beginElement()
    star2Animate.current?.beginElement()
    star3Animate.current?.beginElement()
    star4Animate.current?.beginElement()
    planet1Animate.current?.beginElement()
    planet2Animate.current?.beginElement()
    planet3Animate.current?.beginElement()
    planet4Animate.current?.beginElement()
  }

  const animateReverse = (): void => {
    innerMoonAnimateReverse.current?.beginElement()
    outerMoonAnimateReverse.current?.beginElement()
    star1AnimateReverse.current?.beginElement()
    star2AnimateReverse.current?.beginElement()
    star3AnimateReverse.current?.beginElement()
    star4AnimateReverse.current?.beginElement()
    planet1AnimateReverse.current?.beginElement()
    planet2AnimateReverse.current?.beginElement()
    planet3AnimateReverse.current?.beginElement()
    planet4AnimateReverse.current?.beginElement()
  }

  useEffect(() => {
    if (darkMode) {
      animateReverse()
    } else {
      animateForward()
    }
  }, [darkMode])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path id="innermoon" d="M12 3 a7.5 7.5 0 0 0 7.92 12.446" />
      <path id="outermoon" d="M19.92 15.446 a9 9 0 1 1 -8.313 -12.454" />
      <path id="star1" d="M17 4.5 v0.5" />
      <path id="star2" d="M18.5 6 h-0.5" />
      <path id="star3" d="M17 7.5 v-0.5" />
      <path id="star4" d="M15.5 6 h0.5" />
      <path id="planet1" d="M19 11 l1 0" />
      <path id="planet2" d="M20 10 l0 1" />
      <path id="planet3" d="M20 11 l1 0" />
      <path id="planet4" d="M20 11 l0 1" />

      <animate
        ref={innerMoonAnimate}
         xlinkHref="#innermoon"
         from="M12 3 a7.5 7.5 0 0 0 7.92 12.446"
         to="M15 15 a4 4 0 0 0 -6 -6"
         {...animateProps}
      />
      <animate
        ref={outerMoonAnimate}
        xlinkHref="#outermoon"
        from="M19.92 15.446 a9 9 0 1 1 -8.313 -12.454"
        to="M15 15 a4 4 0 1 1 -6 -6"
        {...animateProps}
      />
      <animate
        ref={star1Animate}
        xlinkHref="#star1"
        from="M17 4.5 v0.5"
        to="M12 3 v1"
        {...animateProps}
      />
      <animate
        ref={star2Animate}
        xlinkHref="#star2"
        from="M18.5 6 h-0.5"
        to="M3 12 h1"
        {...animateProps}
      />
      <animate
        ref={star3Animate}
        xlinkHref="#star3"
        from="M17 7.5 v-0.5"
        to="M12 20 v1"
        {...animateProps}
      />
      <animate
        ref={star4Animate}
        xlinkHref="#star4"
        from="M15.5 6 h0.5"
        to="M20 12 h1"
        {...animateProps}
      />
      <animate
        ref={planet1Animate}
        xlinkHref="#planet1"
        from="M19 11 l1 0"
        to="M5.6 5.6 l.7 .7"
        {...animateProps}
      />
      <animate
        ref={planet2Animate}
        xlinkHref="#planet2"
        from="M20 10 l0 1"
        to="M18.4 5.6 l-.7 .7"
        {...animateProps}
      />
      <animate
        ref={planet3Animate}
        xlinkHref="#planet3"
        from="M20 11 l1 0"
        to="M17.7 17.7 l.7 .7"
        {...animateProps}
      />
      <animate
        ref={planet4Animate}
        xlinkHref="#planet4"
        from="M20 11 l0 1"
        to="M6.3 17.7 l-.7 .7"
        {...animateProps}
      />

      <animate
        ref={innerMoonAnimateReverse}
         xlinkHref="#innermoon"
         from="M15 15 a4 4 0 0 0 -6 -6"
         to="M12 3 a7.5 7.5 0 0 0 7.92 12.446"
         {...animateProps}
      />
      <animate
        ref={outerMoonAnimateReverse}
        xlinkHref="#outermoon"
        from="M15 15 a4 4 0 1 1 -6 -6"
        to="M19.92 15.446 a9 9 0 1 1 -8.313 -12.454"
        {...animateProps}
      />
      <animate
        ref={star1AnimateReverse}
        xlinkHref="#star1"
        from="M12 3 v1"
        to="M17 4.5 v0.5"
        {...animateProps}
      />
      <animate
        ref={star2AnimateReverse}
        xlinkHref="#star2"
        from="M3 12 h1"
        to="M18.5 6 h-0.5"
        {...animateProps}
      />
      <animate
        ref={star3AnimateReverse}
        xlinkHref="#star3"
        from="M12 20 v1"
        to="M17 7.5 v-0.5"
        {...animateProps}
      />
      <animate
        ref={star4AnimateReverse}
        xlinkHref="#star4"
        from="M20 12 h1"
        to="M15.5 6 h0.5"
        {...animateProps}
      />
      <animate
        ref={planet1AnimateReverse}
        xlinkHref="#planet1"
        from="M5.6 5.6 l.7 .7"
        to="M19 11 l1 0"
        {...animateProps}
      />
      <animate
        ref={planet2AnimateReverse}
        xlinkHref="#planet2"
        from="M18.4 5.6 l-.7 .7"
        to="M20 10 l0 1"
        {...animateProps}
      />
      <animate
        ref={planet3AnimateReverse}
        xlinkHref="#planet3"
        from="M17.7 17.7 l.7 .7"
        to="M20 11 l1 0"
        {...animateProps}
      />
      <animate
        ref={planet4AnimateReverse}
        xlinkHref="#planet4"
        from="M6.3 17.7 l-.7 .7"
        to="M20 11 l0 1"
        {...animateProps}
      />
    </svg>
  )
}

export default Icon
