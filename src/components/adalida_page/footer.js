import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faBasketballBall, faLink, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/footer.scss'

const Footer = () => {
  const borderColor = useContext(ThemeContext).primary || '#FFFFFF'
  const borderStyle = `0.25em solid ${borderColor}`
  const borderStyles = {
    borderLeft: borderStyle,
    borderRight: borderStyle,
    borderBottom: borderStyle
  }
  const linkStyle = { color: '#FFFFFF' }
  return (
    <nav className='adalida-footer' style={borderStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '0 auto' }}>
        <a href='/' style={linkStyle}><FontAwesomeIcon icon={faInfoCircle} /></a>
        <a href='/' style={linkStyle}><FontAwesomeIcon icon={faBasketballBall} /></a>
        <a href='/' style={linkStyle}><FontAwesomeIcon icon={faLink} /></a>
        <a href='/' style={linkStyle}><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
    </nav>
  )
}

export default Footer
