import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

const Mobile = ({ title, click, number }) => {
  const { description, name } = useContext(ThemeContext)
  const active = name === title
  const animationDuration = 200

  const transitionStyle = {
    transitionProperty: 'all',
    transitionDuration: `${animationDuration}ms`,
    transitionTimingFunction: 'ease-in-out'
  }

  const linkStyle = {
    pointerEvents: 'visible',
    height: '100%',
    width: '0.25vh',
    backgroundColor: '#FFFFFF',
    ...transitionStyle
  }

  const containerStyle = {
    cursor: 'pointer',
    display: 'grid',
    justifyItems: 'center',
    rowGap: '1vmin',
    gridTemplateRows: '40vh 10vh',
    height: '100%',
    width: '100%',
    pointerEvents: 'none',
    ...transitionStyle
  }

  const textContainerStyle = {
    color: '#FFFFFF',
    pointerEvents: 'none',
    textAlign: 'center',
    display: 'grid',
    fontSize: active ? '5vh' : 'inherit',
    position: 'relative',
    alignItems: active ? 'start' : 'end',
    gridTemplateRows: '30vh 10vh',
    ...transitionStyle
  }

  const navigationLink = <div style={linkStyle} />

  return (
    <div style={containerStyle} onClick={click}>
      <div style={textContainerStyle}>
        <div
          style={{
            position: 'absolute',
            transform: 'translate(-50%, 0)',
            height: '30vh',
            width: '80vw',
            display: 'grid',
            alignItems: 'end',
            ...transitionStyle
          }}
        >
          {number}
          <br />
          {title.toUpperCase()}
          { active && <div style={{ fontSize: '2vh', ...transitionStyle }}><br /> {description}</div> }
        </div>
      </div>
      {navigationLink}
    </div>
  )
}

Mobile.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  showText: PropTypes.bool.isRequired

}

export default Mobile
