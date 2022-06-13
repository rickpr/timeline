import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'

import Button from '../button'
import Image from 'components/image'

const Content = ({ title }) => {
  const { heroPhoto, projectPage } = Themes[title]
  const handleClick = () => setTimeout(() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }), 1000)
  const maxHeight = useIsMobile() ? '50vh' : '80vh'

  const rowStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100%'
  }

  return (
    <>
      <div style={{ ...rowStyle, alignItems: 'start', gridArea: 'hero-photo', maxHeight }}>
        <Image style={{ maxHeight }} imgStyle={{ maxHeight }} path={heroPhoto} />
      </div>
      <div style={{ ...rowStyle, gridArea: 'button' }}>
        <Button href={projectPage} handleClick={handleClick}>View Project</Button>
      </div>
    </>
  )
}

Content.propTypes = {
  title: PropTypes.string.isRequired
}

export default Content
