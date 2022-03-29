import React from 'react'

import designPhoto from 'images/cyph/design.png'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/cyph.scss'

const Design = () => {
  const centerStyles = {
    placeContent: 'space-between center',
    placeItems: 'center center'
  }
  const problem = (
    <div>
      <h1 className='caption'>The Problem</h1>
      Citizens United makes it difficult for voters to see who is financials sponsoring their local representatives.
      <h1 className='caption'>My Solution</h1>
      Provide a fast and easy way for people to learn about a politician&apos;s donors.
    </div>
  )
  const image = (
    <div style={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      ...centerStyles
    }}>
      <img src={designPhoto} style={{ maxWidth: '100%' }} />
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
  const define = (
    <div style={{ maxWidth: '80vw' }}>
      <h1>{'//'} DEFINE</h1>
    </div>
  )
  return (
    <Card title='Design'>
    <div style={style}>
      {define}
      <ResponsiveGrid breakpoint='30vh' customStyles={{ gap: '3%' }} >
        {problem}
        {image}
      </ResponsiveGrid>
    </div>
    </Card>
  )
}

export default Design
