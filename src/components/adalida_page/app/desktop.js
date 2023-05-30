import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import { Projects } from 'theme_context'

const App = ({ title }) => {
  const {
    colors: { background },
    description,
    coverPhoto,
    name,
    projectPage
  } = Projects[title]

  return (
    <div className='app-cover' style={{ background }}>
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
