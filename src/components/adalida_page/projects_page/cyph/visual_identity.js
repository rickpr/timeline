import React from 'react'

import Card from '../card'
import ScalableText from 'components/scalable_text'

import useSynchronizedTypewriter from 'hooks/use_synchronized_typewriter'

import 'sass/adalida_page/cyph.scss'

const VisualIdentity = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

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
      flexBasis: '63%',
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

  const SynchronizedTypewriter = useSynchronizedTypewriter()
  // The library will interpret HTML tags if we don't fool the parser.
  // So the following function has a zero-width space after <
  // https://en.wikipedia.org/wiki/Zero-width_space
  const generateTypewriterString = (heading, text) => `<​${heading}> ${text} </${heading}>`
  const h1String = generateTypewriterString('H1', '48')

  const typography = (
    <div style={{ flexBasis: '31%', flexGrow: 3, flexShrink: 1 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundSize: '9% 9%',
        backgroundImage: `
          linear-gradient(to right, #C1C1C1 1px, transparent 1px),
          linear-gradient(to bottom, #C1C1C1 1px, transparent 1px)
        `,
        alignItems: 'flex-end',
      }}>
        <ScalableText text='A' color='#BB81EE' />
        <ScalableText text='b' color='none' customStyles={{ stroke: '#BB81EE', strokeWidth: '0.1px' }}/>
      </div>
      <h1><SynchronizedTypewriter string='Inconsolata' /></h1>
      <hr />
      <h1><SynchronizedTypewriter string={h1String} /></h1>
      {/* Fix the container width */}
      <h1 style={{ visibility: 'hidden', whiteSpace: 'nowrap', maxHeight: 0 }}>{h1String}&nbsp;</h1>
      <hr />
      <h2><SynchronizedTypewriter string={generateTypewriterString('H2', '36')} /></h2>
      <hr />
      <h3><SynchronizedTypewriter string={generateTypewriterString('H3', '24')} /></h3>
      <hr />
      <h4><SynchronizedTypewriter string={generateTypewriterString('H4', '18')} /></h4>
      <hr />
      <h5><SynchronizedTypewriter string={generateTypewriterString('H5', '16')} /></h5>
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
    <Card title='// Visual Identity'>
    <div style={style}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6%', alignItems: 'stretch', width: '100%' }}>
        {grid}
        {typography}
      </div>
    </div>
    </Card>
  )
}

export default VisualIdentity
