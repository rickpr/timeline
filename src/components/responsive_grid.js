import React from 'react'
import PropTypes from 'prop-types'

const BREAKPOINT = '40vw'

const ResponsiveGrid = ({ breakpoint = `${BREAKPOINT}vw`, children, customStyles = {} }) =>
  <div style={{
    display: 'grid',
    width: '100%',
    gridTemplateColumns: `repeat(auto-fit, minmax(${breakpoint}, 1fr))`,
    ...customStyles
  }}>
    {children}
  </div>

ResponsiveGrid.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.object
}

export default ResponsiveGrid
