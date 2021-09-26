import React, { useState, useEffect } from 'react'

const Blowout = ({ name, active, click, color, mouseEnter, showText }) => {
  // https://en.wikipedia.org/wiki/Party_horn
  const [blownOut, setBlownOut] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [animation, setAnimation] = useState()
  const animationDuration = 200
  const backgroundColor = active ? color : '#CCCCCC88'


  useEffect(() => {
    // Changing direction, but don't need to hide/show the text, mouse left too early
    if (textVisible === showText) {
      clearTimeout(animation)
      setBlownOut(false)
      return
    }

    // The normal case - blow out, switch the text visiblity, then shrink.
    setBlownOut(true)
    setAnimation(
      setTimeout(() => {
        setTextVisible(showText)
        setBlownOut(false)
      }, animationDuration)
    )
  }, [showText])

  const textStyle = {
    color,
    textAlign: 'right',
    visibility: textVisible ? 'visible' : 'hidden'
  }

  const transitionStyle = {
    transitionProperty: 'all',
    transitionDuration: `${animationDuration}ms`,
    transitionTimingFunction: 'ease-in-out'
  }

  const blowOut = () =>
    <div
      key="blow-out"
      className={`blow-out ${blownOut && 'blown-out'}`}
      style={{ backgroundColor, ...transitionStyle }}
    />

  return (
    <div style={transitionStyle} className="blow-out-container" onClick={click}>
      <div key="name" style={textStyle} className={blownOut && 'blown-out'}><h1>{name}</h1></div>
      <div key="trigger-area" className="blow-out-trigger-area" onMouseEnter={mouseEnter} />
      {blowOut()}
    </div>
  )
}

export default Blowout
