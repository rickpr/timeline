import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Themes, ThemeContext } from 'theme_context'

const Mobile = ({ title, click, number }) => {
  const { name } = useContext(ThemeContext)
  const { border } = Themes[title]
  const borderColor = name === title ? border : '#CCCCCC88'
  const animationDuration = 200

  const transitionStyle = {
    transitionProperty: 'all',
    transitionDuration: `${animationDuration}ms`,
    transitionTimingFunction: 'ease-in-out'
  }

  const textContainerStyle = {
    color: '#FFFFFF',
    pointerEvents: 'none',
    textAlign: 'center',
    display: 'grid',
    fontSize: 'min(7vw, 3vh)',
    position: 'relative',
    borderBottom: `0.25vh solid ${borderColor}`,
    ...transitionStyle
  }

  return (
    <div style={textContainerStyle}>
      {number}
      <br />
      {title.toUpperCase()}
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
