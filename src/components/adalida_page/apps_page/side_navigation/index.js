import React from 'react'
import PropTypes from 'prop-types'

import useIsMobile from 'hooks/use_is_mobile'

import Desktop from './desktop'
import Mobile from './mobile'

const SideNavigation = ({ links }) => useIsMobile() ? <Mobile links={links} /> : <Desktop links={links} />

SideNavigation.propTypes = {
  links: PropTypes.shape({
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    ref: PropTypes.shape({ current: PropTypes.node }).isRequired
  })
}

export default SideNavigation
