import React from 'react'

import Image from './image'
import { glassStyles } from '../styles'

const logoStyle = {
  ...glassStyles,
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  display: 'flex',
  padding: '8px',
  height: '40px',
  width: '40px'
}

const Logo = (): JSX.Element => <Image style={logoStyle} />
export default Logo
