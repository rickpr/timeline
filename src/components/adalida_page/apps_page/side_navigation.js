import React, { useState } from 'react'

import Blowout from './blowout'

const SideNavigation = ({ links, click }) => {
  const styles = {
    position: 'fixed',
    top: '50%',
    right: '0',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    gridTemplateColumns: '1fr',
  }

  const [showText, setShowText] = useState(Object.keys(links).map(() => false))
  const waveDelay = 100

  const handleMouse = makeTextVisible => {
    showText.forEach(
      (_, index) => setTimeout(
        () => {
          setShowText(newShowText => {
            newShowText[index] = makeTextVisible
            // Have to make a new array or we won't re-render
            return [...newShowText]
          })
        }, waveDelay * index)
    )
  }

  return (
    <div style={styles} onMouseEnter={() => handleMouse(true)} onMouseLeave={() => handleMouse(false)}>
      {Object.entries(links).map(([name, { color, ref, component }], index) =>
        <Blowout
          key={index}
          click={() => click(index)}
          name={name}
          color={color}
          showText={showText[index]}
        />
      )}
    </div>
  )
}

export default SideNavigation
