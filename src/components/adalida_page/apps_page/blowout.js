import React, { useState } from 'react'

const Blowout = ({ name }) => {
  // https://en.wikipedia.org/wiki/Party_horn
  const [blowoutWidth, setBlowoutWidth] = useState(0)
  const [skew, setSkew] = useState(0)
  const [textVisible, setTextVisible] = useState(false)
  const animationDelay = 1
  const widthFrames = 100
  const skewFrames = 25
  let animationInterval = null
  let width = 0
  let previousSkew = 0
  let textShown = false

  const styles = {
    cursor: 'pointer',
    padding: '0.5em 0',
    display: 'flex',
    justifyContent: 'right',
  }

  const textStyles = {
    marginRight: '1em',
    visibility: textVisible ? 'visible' : 'hidden',
  }

  const pillStyles = {
    borderRadius: '25%',
    borderStyle: 'solid',
    position: 'absolute',
    minHeight: '1.5em',
    minWidth: blowoutWidth,
    background: '#000000',
    right: 0,
    transform: `skewX(${skew}deg)`
  }

  const animatePill = ({ backward }) => {
    if(backward) console.log(backward === textShown)
    if(backward === textShown) {
      if(backward) {
        console.log('backwirdd')
        console.log(width)
        console.log(previousSkew)
      }
      if(width < widthFrames) return setBlowoutWidth(++width)
      if(previousSkew < skewFrames) return setSkew(++previousSkew)
      console.log(backward ? 'backward' : 'forward')
      textShown = !textShown
      return setTextVisible(textShown)
    }

    // Second half of animation, text has been shown or hidden
    if(previousSkew) return setSkew(--previousSkew)
    if(width) return setBlowoutWidth(--width)
    return clearInterval(animationInterval)
  }

  const animateForward = () => {
    clearInterval(animationInterval)
    animationInterval = setInterval(() => animatePill({ backward: false }), animationDelay)
  }

  const animateBackward = () => {
    clearInterval(animationInterval)
    animationInterval = setInterval(() => animatePill({ backward: true }), animationDelay)
  }

  const pill = () => <div style={pillStyles} onMouseOver={animateForward} onMouseOut={animateBackward} />

  return (
    <div style={styles}>
      <div style={textStyles}>
        {name}
      </div>
      {pill()}
    </div>
  )
}

export default Blowout
