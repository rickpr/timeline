import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'

import NavigationLink from './navigation_link'

const Mobile = ({ links }) => {
  const widthOnScreen = 80 // vw

  const outerStyles = {
    pointerEvents: 'none',
    position: 'fixed',
    bottom: '10vh',
    width: `${widthOnScreen}vw`,
    left: `${(100 - widthOnScreen) / 2}vw`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 3
  }

  const navigationLinks = Object.entries(links).slice(0, -1).map(
    ([title, ref], index) => {
      const { name, primary } = Themes[title]
      const number = String(index + 1).padStart(2, 0)
      return (
        <NavigationLink
          key={`navigation-link-${number}`}
          number={number}
          click={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
          title={name}
          color={primary}
        />
      )
    }
  )
  return (
    <div style={outerStyles}>
      {navigationLinks}
    </div>
  )
}

Mobile.propTypes = {
  links: PropTypes.shape({
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    ref: PropTypes.shape({ current: PropTypes.node }).isRequired
  })
}

export default Mobile
