import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import { Themes } from 'theme_context'

const App = ({ title }) => {
  const { description, coverPhoto, name, projectPage } = Themes[title]

  return (
    <div className='app-cover'>
      <img alt={`${title} cover`} src={coverPhoto} className='app-image' />
      <Link to={projectPage} className='app-label'>
        <div className='app-label-text'>
          <h2>{name.toUpperCase()}</h2>
          {description}
        </div>
      </Link>
    </div>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired
}

export default App
