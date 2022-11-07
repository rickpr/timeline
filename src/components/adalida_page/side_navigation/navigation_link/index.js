import React from 'react'
import PropTypes from 'prop-types'

import useIsMobile from 'hooks/use_is_mobile'
import Mobile from './mobile'
import Desktop from './desktop'

const NavigationLink = ({ title, click, number }) => {
  const Component = useIsMobile() ? Mobile : Desktop
  return <Component title={title} click={click} number={number} />
}

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
}

export default NavigationLink
