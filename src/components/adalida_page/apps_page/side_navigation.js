import React from 'react'

const SideNavigation = ({ links }) => {
  const styles = {
    position: 'fixed',
    top: '50%',
    right: '5em',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    gridTemplateColumns: '1fr',
  }

  return (
    <div style={styles}>
      {Object.entries(links).map(([name, ref]) =>
        <button onClick={() => ref.current.scrollIntoView({behavior: 'smooth'})}>{name}</button>
      )}
    </div>
  )
}

export default SideNavigation
