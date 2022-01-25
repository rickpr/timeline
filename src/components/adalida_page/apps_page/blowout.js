import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

const Blowout = ({ title, click, showText }) => {
  // https://en.wikipedia.org/wiki/Party_horn
  const { name, primary } = useContext(ThemeContext)
  const active = name === title
  const [blownOut, setBlownOut] = useState()
  const [textVisible, setTextVisible] = useState(false)
  const [animation, setAnimation] = useState()
  const animationDuration = 200
  const backgroundColor = active ? primary : '#CCCCCC88'

  useEffect(() => {
    // Changing direction, but don't need to hide/show the text, mouse left too early
    if (textVisible === showText) {
      clearTimeout(animation)
      setBlownOut(undefined)
      return
    }

    // The normal case - blow out, switch the text visiblity, then shrink.
    setBlownOut(true)
    setAnimation(
      setTimeout(() => {
        setTextVisible(showText)
        setBlownOut(undefined)
      }, animationDuration)
    )
  }, [showText])

  const textStyle = {
    color: active ? primary : '#FFFFFF',
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
      key='blow-out'
      style={{ position: 'relative', height: '100%', ...transitionStyle }}
    >
      <div
        style={{ position: 'absolute', height: '100%', backgroundColor, ...transitionStyle }}
        className={`blow-out ${blownOut && 'blown-out'}`}
      />
    </div>

  return (
    <div className='blow-out-container' style={transitionStyle} onClick={click}>
      <div key='name' style={{ ...textStyle, ...transitionStyle }} className={blownOut && 'blown-out'}>{title}</div>
      {blowOut()}
    </div>
  )
}

Blowout.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  showText: PropTypes.bool.isRequired

}

export default Blowout
