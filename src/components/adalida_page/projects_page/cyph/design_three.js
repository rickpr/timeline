import React from 'react'

import Card from '../card'
import ScalableText from 'components/scalable_text'

import 'sass/adalida_page/cyph.scss'

const DesignThree = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

  const visualIdentity = (
    <div style={{ maxWidth: '80vw' }}>
      <h1>{'//'} Visual Identity</h1>
    </div>
  )
  const gridTemplate = `
    'black     black     black black      black      black'      4fr
    'blue      blue      blue  black-two  black-two  black-two'  1fr
    'blue      blue      blue  purple     purple     purple'     3fr
    'dark-gray dark-gray white white      light-gray light-gray' 1fr / 1fr 1fr 1fr 1fr 1fr 1fr
`
  const fullWidth = { width: '100%', height: '100%', display: 'flex', placeItems: 'center', placeContent: 'center' }
  const grid = (
    <div style={{
      display: 'grid',
      flexBasis: '60%',
      flexGrow: 2,
      gridTemplate,
      ...centerStyles
    }}>
      <div style={{ gridArea: 'black', backgroundColor: '#000000', color: '#FFFFFF', ...fullWidth }}>#000000</div>
      <div style={{ gridArea: 'blue', backgroundColor: '#4A00E0', color: '#FFFFFF', ...fullWidth }}>#4A00E0</div>
      <div style={{ gridArea: 'black-two', backgroundColor: '#000000', ...fullWidth }}>&nbsp;</div>
      <div style={{ gridArea: 'purple', backgroundColor: '#8E2DE2', color: '#FFFFFF', ...fullWidth }}>#8E2DE2</div>
      <div style={{ gridArea: 'dark-gray', backgroundColor: '#72787E', color: '#FFFFFF', ...fullWidth }}>#72787E</div>
      <div style={{ gridArea: 'white', backgroundColor: '#FFFFFF', ...fullWidth }}>#FFFFFF</div>
      <div style={{ gridArea: 'light-gray', backgroundColor: '#C7C6C4', ...fullWidth }}>#C7C6C4</div>
    </div>
  )
  const typography = (
    <div style={{ flexBasis: '10%', flexGrow: 3, flexShrink: 1 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundSize: '9% 9%',
        backgroundImage: `
          linear-gradient(to right, #C1C1C1 1px, transparent 1px),
          linear-gradient(to bottom, #C1C1C1 1px, transparent 1px)
        `,
        alignItems:'flex-end',
      }}>
        <ScalableText text='A' customStyles={{ fill: '#BB81EE' }}/>
        <ScalableText text='b' customStyles={{ fill: 'none', stroke: '#BB81EE', strokeWidth: '0.1px' }}/>
      </div>
      <h1>Inconsolata</h1>
      <hr />
      <h1 style={{ whiteSpace: 'nowrap' }}>&lt;H1&gt; 48 &lt;&#47;H1&gt;</h1>
      <hr />
      <h2>&lt;H2&gt; 36 &lt;&#47;H2&gt;</h2>
      <hr />
      <h3>&lt;H3&gt; 24 &lt;&#47;H3&gt;</h3>
      <hr />
      <h4>&lt;H4&gt; 18 &lt;&#47;H5&gt;</h4>
      <hr />
      <h5>&lt;H5&gt; 16 &lt;&#47;H5&gt;</h5>
    </div>
  )
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '90%',
    height: '100%',
    margin: '0 auto',
    gap: '1%',
    ...centerStyles
  }

  return (
    <Card title='Design'>
    <div style={style}>
      {visualIdentity}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6%', alignItems: 'stretch' }}>
        {grid}
        {typography}
      </div>
    </div>
    </Card>
  )
}

export default DesignThree
