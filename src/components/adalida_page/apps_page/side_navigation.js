import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Blowout from './blowout'

const SideNavigation = ({ links, activeProject }) => {
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
    top: 'calc(50% - 3rem)',
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
        ([name, { background, color, ref }], index) => {
          const active = activeProject === name
          return (
            <>
              <Blowout
                key={`blowout-${index}`}
                active={active}
                click={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
                name={name}
                color={color}
                showText={showText[index]}
              />
              <div
                key={`div-${index}`}
                style={{
                  opacity: active ? 1 : 0,
                  position: 'fixed',
                  height: '100vh',
                  left: 0,
                  top: 0,
                  width: '100vw',
                  zIndex: -99,
                  pointerEvents: 'none',
                  transition: 'opacity 0.5s ease',
                  background
                }}
              />
            </>
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
  activeProject: PropTypes.string.isRequired
}

export default SideNavigation
