import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'
import Button from '../button'
import Image from 'components/image'

const Content = ({ title }) => {
  const { heroPhoto, projectPage } = Themes[title]
  const handleClick = () => setTimeout(() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }), 1000)

  const rowStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <>
      <div style={{ ...rowStyle, alignItems: 'start' }}>
        <Image style={{ maxHeight: '80vh' }} path={heroPhoto} />
      </div>
      <div style={{ ...rowStyle }}>
        <Button href={projectPage} handleClick={handleClick}>View Project</Button>
      </div>
    </>
  )
}

Content.propTypes = {
  title: PropTypes.string.isRequired
}

export default Content
