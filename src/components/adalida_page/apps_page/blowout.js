import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

const Blowout = ({ title, click, number }) => {
  const { name, primary, description } = useContext(ThemeContext)
  const active = name === title
  const animationDuration = 200
  const backgroundColor = active ? primary : '#CCCCCC88'
  const color = active ? primary : '#FFFFFF'

  const textStyle = {
    color,
    fontSize: active ? '5vh' : '3vh',
    pointerEvents: 'none',
    whiteSpace: 'nowrap'
  }

  const transitionStyle = {
    transitionProperty: 'all',
    transitionDuration: `${animationDuration}ms`,
    transitionTimingFunction: 'ease-in-out'
  }

  const blowOut = () =>
    <div
      style={{ position: 'relative', height: '100%', ...transitionStyle }}
    >
      <div
        style={{ position: 'absolute', height: '100%', backgroundColor, ...transitionStyle }}
        className='blow-out'
      />
    </div>

  return (
    <div className='blow-out-container' style={transitionStyle} onClick={click}>
      {blowOut()}
      <div style={{ ...textStyle, ...transitionStyle }}>
        {number} {title}
    {active &&
     <div style={{ ...transitionStyle, ...textStyle, fontSize: '2vh', whiteSpace: 'normal', color: '#FFFFFF' }}>{description}</div>
    }
      </div>
    </div>
  )
}

Blowout.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  showText: PropTypes.bool.isRequired

}

export default Blowout
