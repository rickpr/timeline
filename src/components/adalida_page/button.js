import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, handleClick, style = {} }) =>
  <button
    onClick={handleClick}
    style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '2vmin',
      border: 'none',
      fontSize: '3vmin',
      lineHeight: 'normal',
      marginTop: '1.5vmin',
      padding: '1.5vmin',
      pointerEvents: 'all',
      ...style
    }}
  >
    {children}
  </button>

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  style: PropTypes.object
}

export default Button
