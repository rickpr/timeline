import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { ThemeContext } from 'theme_context'

const Footer = () => {
  const { footer, stroke } = useContext(ThemeContext)
  const divStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    borderTop: `0.3rem solid ${stroke}`,
    width: '100%',
    textAlign: 'center'
  }
  return (
    <footer style={{ minHeight: '4vh', color: footer, display: 'grid', gridTemplateColumns: '1fr 24fr' }}>
      <div />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(15em, 1fr))',
        width: '100%',
        height: '100%',
        justifyItems: 'center'
      }}>
        <div style={divStyle}>
          LinkedIn: <Link style={{ color: '#000000' }} to='https://www.linkedin.com/in/adalidabaca'>adalida.baca</Link>
        </div>
        <div style={divStyle}>
          Email: <Link style={{ color: '#000000' }} to='mailto:adalida.baca@gmail.com'>adalida.baca@gmail.com</Link>
        </div>
        <div style={divStyle}>
          Dribbble: <Link style={{ color: '#000000' }} to='https://dribbble.com/adalida-baca'>dribbble.com/adalida-baca</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
