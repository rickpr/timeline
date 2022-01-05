import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  const divStyle = { display: 'inline-block', whiteSpace: 'nowrap' }
  return (
    <footer style={{ backgroundColor: '#000000', minHeight: '4vh', color: '#FF2079' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(15em, 1fr))',
        width: '100%',
        justifyItems: 'center',
        alignContent: 'center'
      }}>
        <div style={divStyle}>
          Social: <Link style={{ color: '#39FF14' }} to='/us'>Helios</Link>
        </div>
        <div style={divStyle}>
          Email: <Link style={{ color: '#39FF14' }} to='mailto:adalida.baca@gmail.com'>adalida.baca@gmail.com</Link>
        </div>
        <div style={divStyle}>
          Mobile: <Link style={{ color: '#39FF14' }} to='tel:505-480-3550'>(505) 480-3550</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
