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
    color: active ? color : '#FFFFFF',
    textAlign: 'right',
    fontSize: '1.5rem',
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
      onMouseEnter={mouseEnter}
      style={{ position: 'relative', height: '100%', ...transitionStyle }}
    >
      <div
        style={{ position: 'absolute', height: '100%', backgroundColor, ...transitionStyle }}
        className={`blow-out ${blownOut && 'blown-out'}`}
      />
    </div>

  return (
    <div className="blow-out-container" style={transitionStyle} onClick={click}>
      <div key="name" style={{ ...textStyle, ...transitionStyle }} className={blownOut && 'blown-out'}>{name}</div>
      {blowOut()}
    </div>
  )
}

export default Blowout
