import React from 'react'

import CaseStudyThemes from 'case_study_themes'
import Card from '.'
import { ContainerStyles } from './styles'

const Container = (): JSX.Element => {
  return (
    <div style={ContainerStyles}>
      {Object.values(CaseStudyThemes).map((theme) => <Card key={theme.name} theme={theme} />)}
    </div>
  )
}

export default Container
