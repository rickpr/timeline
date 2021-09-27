import React, { useState } from 'react'

import Blowout from './blowout'

const SideNavigation = ({ links, click, activeIndex }) => {
  const [showText, setShowText] = useState(Object.keys(links).map(() => false))
  const waveDelay = 100

  const styles = {
    backgroundColor: showText[0] ? '#00000033' : undefined,
    borderRadius: '15%',
    padding: '1%',
    position: 'fixed',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignContent: 'center',
    rowGap: '0',
    right: '5%',
    top: '50%',
    transform: 'translate(0, -50%)'
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
        ([name, { color }], index) => {
          const active = activeIndex === index
          return (
            <Blowout
              key={index}
              active={active}
              click={() => !active && click(index)}
              mouseEnter={() => toggleTextVisibility(true)}
              name={name}
              color={color}
              showText={showText[index]}
            />
          )
        }
      )}
    </div>
  )
}

export default SideNavigation
