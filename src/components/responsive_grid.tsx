import React, { type CSSProperties } from 'react'

const BREAKPOINT = '40vw'

interface Props {
  breakpoint?: string
  children: React.ReactNode
  customStyles?: CSSProperties
}

const ResponsiveGrid = ({ breakpoint = BREAKPOINT, children, customStyles = {} }: Props): JSX.Element =>
  <div
    style={{
      display: 'grid',
      width: '100%',
      gridTemplateColumns: `repeat(auto-fit, minmax(${breakpoint}, 1fr))`,
      ...customStyles
    }}
  >
    {children}
  </div>

export default ResponsiveGrid
