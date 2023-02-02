import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'

const App = ({ title }) => {
  const { heroPhoto, projectPage } = Themes[title]

  return (
    <div className='app-cover'>
      <img alt={`${title} cover`} src={heroPhoto} className='app-image' />
      <a href={projectPage} className='app-label'>{title}</a>
    </div>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired
}

export default App
