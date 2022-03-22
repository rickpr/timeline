import React from 'react'

import testTwoPhoto from 'images/cyph/test_two.png'

import Card from '../card'

import 'sass/adalida_page/cyph.scss'

const TestTwo = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

  const nextSteps = (
    <div style={{ maxWidth: '80vw' }}>
      <h1>{'//'} Next Steps</h1>
    </div>
  )
  const image = (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      flexBasis: '66%',
      ...centerStyles
    }}>
      <img src={testTwoPhoto} style={{ maxWidth: '100%' }} />
    </div>
  )
  const problem = (
    <div style={{ flexBasis: '34%', flexGrow: 3, flexShrink: 1 }}>
      <h1>Develop</h1>
      <h1>Influence</h1>
      <h1>Experience</h1>
      <hr />
      Design an experience where users can scan products or company logos and learn about politicians they donate to.
      <h1>User Testing</h1>
      <hr />
      Conduct in-person usability studies.
    </div>
  )
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '90%',
    height: '100%',
    margin: '0 auto',
    ...centerStyles
  }

  return (
    <Card title='Test'>
    <div style={style}>
      {nextSteps}
      <div style={{ display: 'flex', flexWrap: 'wrap', placeItems: 'center' }}>
        {image}
        {problem}
      </div>
    </div>
    </Card>
  )
}

export default TestTwo
