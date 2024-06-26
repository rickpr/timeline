import React from 'react'

import Projects from 'projects'
import Card from './card'

const Container = (): JSX.Element => {
  return (
    <div className='portfolio-container'>
      {Object.values(Projects).map((project, index) =>
        <Card key={project.name} reverse={Boolean(index % 2)} project={project} />)
      }
    </div>
  )
}

export default Container
