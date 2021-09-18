import React, { useState, useEffect } from 'react'

const Blowout = ({ name, color, click, showText }) => {
  // https://en.wikipedia.org/wiki/Party_horn
  const [blownOut, setBlownOut] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [animation, setAnimation] = useState()
  const animationDuration = 200

  useEffect(() => {
    if(textVisible === showText) {
      clearTimeout(animation)
      setBlownOut(false)
      return
    }

    setBlownOut(true)
    setAnimation(
      setTimeout(() => {
        setTextVisible(showText)
        setBlownOut(false)
      }, animationDuration)
    )
  }, [showText])

  const textStyle = {
    marginRight: '1em',
    visibility: textVisible ? 'visible' : 'hidden',
    color,
  }

  const transitionStyle = {
    transitionProperty: 'width, skewX',
    transitionDuration: `${animationDuration}ms`,
    transitionTimingFunction: 'ease-in-out',
  }

  const blowOut = () =>
    <div
      className={`blow-out ${blownOut && 'blown-out'}`}
      style={{
        backgroundColor: color,
        borderColor: color,
        ...transitionStyle
      }}
    />

  return (
    <div style={transitionStyle} className={`blow-out-container ${blownOut && 'skewed'}`} onClick={click}>
      <div style={textStyle}>{name}</div>
      {blowOut()}
    </div>
  )
}

export default Blowout
