import React, { useState } from 'react'

import Blowout from './blowout'

const SideNavigation = ({ links, click, activeIndex }) => {
  const styles = {
    position: 'fixed',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignContent: 'space-around',
    height: '100%',
    right: '5%'
  }

  const [showText, setShowText] = useState(Object.keys(links).map(() => false))
  const waveDelay = 100

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

  const handleClick = index => {
    click(index)
    toggleTextVisibility(false)
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
              click={() => !active && handleClick(index)}
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
