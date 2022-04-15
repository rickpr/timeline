import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ children, handleClick, href, style = {} }) => {
  const onClick = event => {
    // Do this so the href still shows the link, but internally,
    // we handle the navigation using gatsby's `navigate`.
    event.preventDefault()
    // Any custom logic goes here
    if (handleClick) handleClick(event)
    navigate(href)
  }
  return (
    <a
      onClick={onClick}
      href={href}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '2vmin',
        border: 'none',
        color: 'black',
        fontSize: '3vmin',
        lineHeight: 'normal',
        marginTop: '1.5vmin',
        padding: '1.5vmin',
        pointerEvents: 'all',
        textDecoration: 'none',
        ...style
      }}
    >
      {children}
    </a>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  href: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Button
