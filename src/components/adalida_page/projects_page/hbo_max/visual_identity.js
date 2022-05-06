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
      <div style={{ gridArea: 'black', backgroundColor: '#DB00FF', color: '#FFFFFF', ...fullWidth }}>#DB00FF</div>
      <div style={{ gridArea: 'blue', backgroundColor: '#4301FF', color: '#FFFFFF', ...fullWidth }}>#4301FF</div>
      <div style={{ gridArea: 'black-two', backgroundColor: '#15000F', color: '#FFFFFF', ...fullWidth }}>#15000F</div>
      <div style={{ gridArea: 'purple', backgroundColor: '#44156D', color: '#FFFFFF', ...fullWidth }}>#44156D</div>
      <div style={{ gridArea: 'dark-gray', backgroundColor: '#BDBDBD', ...fullWidth }}>#BDBDBD</div>
      <div style={{ gridArea: 'white', backgroundColor: '#2AE039', ...fullWidth }}>#2AE039</div>
      <div style={{ gridArea: 'light-gray', backgroundColor: '#E0E0E0', ...fullWidth }}>#E0E0E0</div>
    </div>
  )

  const SynchronizedTypewriter = useSynchronizedTypewriter()
  // The library will interpret HTML tags if we don't fool the parser.
  // So the following function has a zero-width space after <
  // https://en.wikipedia.org/wiki/Zero-width_space
  const generateTypewriterString = (heading, text) => `<​${heading}> ${text} </${heading}>`
  const h1String = generateTypewriterString('H1', '48')
  const fontFamily = 'Inter'

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
        alignItems: 'flex-end'
      }}>
        <ScalableText text='A' color='#BB81EE' customStyles={{ fontFamily }} viewBoxWidthMultiplier={11} />
        <ScalableText
          text='b'
          color='none'
          customStyles={{ fontFamily, stroke: '#BB81EE', strokeWidth: '0.1px' }}
          viewBoxWidthMultiplier={11}
        />
      </div>
      <h1><SynchronizedTypewriter string='Inter' styles={{ fontFamily }} /></h1>
      <hr />
      <h1><SynchronizedTypewriter string={h1String} styles={{ fontFamily }}/></h1>
      {/* Fix the container width */}
      <h1 style={{ visibility: 'hidden', whiteSpace: 'nowrap', maxHeight: 0 }}>{h1String}&nbsp;</h1>
      <hr />
      <h2><SynchronizedTypewriter string={generateTypewriterString('H2', '36')} styles={{ fontFamily }} /></h2>
      <hr />
      <h3><SynchronizedTypewriter string={generateTypewriterString('H3', '24')} styles={{ fontFamily }} /></h3>
      <hr />
      <h4><SynchronizedTypewriter string={generateTypewriterString('H4', '18')} styles={{ fontFamily }} /></h4>
      <hr />
      <h5><SynchronizedTypewriter string={generateTypewriterString('H5', '16')} styles={{ fontFamily }} /></h5>
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
