import React from 'react'

import Blowout from './blowout'

const SideNavigation = ({ links }) => {
  const styles = {
    position: 'fixed',
    top: '50%',
    right: '0',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    gridTemplateColumns: '1fr',
  }

  return (
    <div style={styles}>
      {Object.entries(links).map(([name, ref]) =>
        <Blowout onClick={() => ref.current.scrollIntoView({behavior: 'smooth'})} name={name} />
      )}
    </div>
  )
}

export default SideNavigation
