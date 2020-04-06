import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ href, icon }) =>
  <a href={href} className="footer-icon"><FontAwesomeIcon icon={icon} /></a>;

export default Icon
