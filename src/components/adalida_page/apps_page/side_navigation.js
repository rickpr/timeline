import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'

import Blowout from './blowout'

const SideNavigation = ({ links }) => {
  const [showText, setShowText] = useState(Object.keys(links).map(() => false))
  const waveDelay = 100

  const styles = {
    backgroundColor: showText[0] ? '#00000033' : undefined,
    pointerEvents: 'visible',
    borderRadius: '15%',
    padding: '1%',
    position: 'absolute',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignContent: 'center',
    rowGap: '0',
    right: '5%',
    top: 'calc(50% - 3rem)'
  }

  const toggleTextVisibility = makeTextVisible => {
    showText.forEach(
      (_, index) => setTimeout(
        () => {
          setShowText(newShowText => {
            newShowText[index] = makeTextVisible
            // Have to make a new array or we won't re-render
            return [...newShowText]
          })
        },
        waveDelay * index
      )
    )
  }

  const displayText = () => toggleTextVisibility(true)
  const hideText = () => toggleTextVisibility(false)

  return (
    <div style={styles} onMouseEnter={displayText} onMouseLeave={hideText}>
      {Object.entries(links).map(
        ([title, ref], index) => {
          const { primary } = Themes[title]
          return (
            <Blowout
              key={`blowout-${index}`}
              click={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
              title={title}
              color={primary}
              showText={showText[index]}
            />
          )
        }
      )}
    </div>
  )
}

SideNavigation.propTypes = {
  links: PropTypes.shape({
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    ref: PropTypes.shape({ current: PropTypes.node }).isRequired
  }),
}

export default SideNavigation
