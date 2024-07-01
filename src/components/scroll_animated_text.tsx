import React, { useEffect, useRef } from 'react'

const offset = 0.2

const ScrollAnimatedText = ({ text }: { text: string }): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const eventListener = (): void => {
      const container = containerRef.current
      if (container === null) return

      const rect = container.getBoundingClientRect()
      if (rect.top > window.innerHeight || rect.bottom < 0) return

      const fractionScrolled = (window.innerHeight - rect.top) / window.innerHeight
      const scrolled = fractionScrolled - offset
      const letters = container.querySelectorAll<HTMLSpanElement>('.animated-letter')

      letters.forEach((letter, index) => {
        if (index / letters.length < scrolled) {
          letter.style.setProperty('opacity', '1')
        } else {
          letter.style.setProperty('opacity', '0.4')
        }
      })
    }

    document.addEventListener('scroll', eventListener)
    return () => { document.removeEventListener('scroll', eventListener) }
  }, [])

  return (
    <div ref={containerRef}>
      {
        text.split('').map((letter, index) => {
          console.log(letter)
          if (letter === ' ') {
            return <span key={index}> </span>
          } else if (letter === '\n') {
            console.log('dak dak cyka blyat')
            return <br key={index} />
          } else {
            return <span key={index} className='animated-letter'>{letter}</span>
          }
        })
      }
    </div>
  )
}

export default ScrollAnimatedText
