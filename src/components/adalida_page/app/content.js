import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { Themes } from 'theme_context'
import Button from '../button'
import Image from 'components/image'

const Content = ({ title }) => {
  const { heroPhoto, projectPage } = Themes[title]
  const handleClick = () => {
    setTimeout(() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }), 1000)
    navigate(projectPage)
  }

  const rowStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const heroPicture = (
    <div key='hero-picture' style={{ ...rowStyle, alignItems: 'start' }}>
      <Image style={{ maxHeight: '50vh' }} path={heroPhoto} />
    </div>
  )

  const button = (
    <div key='button' style={{ ...rowStyle }}>
      <Button handleClick={handleClick}>View Project</Button>
    </div>
  )

  return [heroPicture, button]
}

Content.propTypes = {
  title: PropTypes.string.isRequired
}

export default Content
