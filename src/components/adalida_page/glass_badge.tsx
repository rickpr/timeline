import React from 'react'

import { glassStyles } from './styles'

const styles = {
  ...glassStyles,
  fontWeight: 500,
  transition: 'background-color 0.5s ease-in-out',
  padding: '0.8em',
  fontSize: '12px',
  lineHeight: 1,
  whiteSpace: 'nowrap' as const
}

const GlassBadge = ({ children }: { children: React.ReactNode }): JSX.Element =>
  <div style={styles}>{children}</div>

export default GlassBadge
