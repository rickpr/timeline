import React from 'react'
import PropTypes from 'prop-types'
import { BREAKPOINT } from 'hooks/use_is_mobile'

const ResponsiveGrid = ({ breakpoint = `${BREAKPOINT}px`, children }) =>
  <div style={{
    display: 'grid',
    width: '100%',
    gridTemplateColumns: `repeat(auto-fit, minmax(${breakpoint}, 1fr))`
  }}>
    {children}
  </div>

ResponsiveGrid.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default ResponsiveGrid
