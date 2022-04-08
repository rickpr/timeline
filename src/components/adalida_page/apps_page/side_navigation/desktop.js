import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'

import NavigationLink from './navigation_link'

const Desktop = ({ links }) => {
  const styles = {
    pointerEvents: 'none',
    position: 'fixed',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignContent: 'center',
    gap: '1vmin',
    top: '50%',
    transform: 'translate(0, -50%)',
    width: '20vmin',
    left: '2.5vw',
    zIndex: 3
  }

  return (
    <div style={styles}>
      {Object.entries(links).map(
        ([title, ref], index) => {
          const { primary } = Themes[title]
          const number = String(index + 1).padStart(2, 0)
          return (
            <NavigationLink
              key={`navigation-link-${number}`}
              number={number}
              click={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
              title={title}
              color={primary}
            />
          )
        }
      )}
    </div>
  )
}

Desktop.propTypes = {
  links: PropTypes.shape({
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    ref: PropTypes.shape({ current: PropTypes.node }).isRequired
  })
}

export default Desktop
