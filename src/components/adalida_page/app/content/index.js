import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import Desktop from './desktop'
import Mobile from './mobile'
import useIsMobile from 'hooks/use_is_mobile'

import { Themes } from 'theme_context'

const Content = ({ title }) => {
  const { heroPhoto, projectPage } = Themes[title]
  const isMobile = useIsMobile()
  console.log(isMobile)
  const Component = isMobile ? Mobile : Desktop
  const handleClick = () => {
    setTimeout(() => window.scrollTo(0, document.documentElement.clientHeight + window.pageYOffset), 1000)
    navigate(projectPage)
  }
  return <Component handleClick={handleClick} heroPhoto={heroPhoto} />
}

Content.propTypes = {
  title: PropTypes.string.isRequired
}

export default Content
