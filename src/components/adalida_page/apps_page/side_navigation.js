import React, { useState } from 'react'

import Blowout from './blowout'

const SideNavigation = ({ links, activeIndex }) => {
  const [showText, setShowText] = useState(Object.keys(links).map(() => false))
  const waveDelay = 100

  const styles = {
    backgroundColor: showText[0] ? '#00000033' : undefined,
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

  return (
    <div style={styles} onMouseLeave={() => toggleTextVisibility(false)}>
      {Object.entries(links).map(
        ([name, { background, color, ref }], index) => {
          const active = activeIndex === index
          console.log(background)
          return (
            <>
              <Blowout
                key={`blowout-${index}`}
                active={active}
                click={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
                mouseEnter={() => toggleTextVisibility(true)}
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
                  background: background
                }}
              />
            </>
          )
        }
      )}
    </div>
  )
}

export default SideNavigation
