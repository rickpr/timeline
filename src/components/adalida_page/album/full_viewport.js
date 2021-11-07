import React from 'react'

const FullViewport = ({ children, marginTop }) => {
  const styles = {
    display: 'grid',
    minHeight: '100vh',
    width: '100%',
    transition: 'margin-top 1s cubic-bezier(.31,1.05,.67,.92)',
    position: 'fixed',
    zIndex: '-1',
    marginTop
  }
  return (
    <div style={styles}>{children}</div>
  )
}

export default FullViewport
