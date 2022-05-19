import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import Card from './card'
import ScalableText from 'components/scalable_text'

import useSynchronizedTypewriter from 'hooks/use_synchronized_typewriter'

import { ThemeContext } from 'theme_context'

const viewBoxWidthMultipliers = {
  Inconsolata: 9,
  Bodoni: 11,
  Inter: 12

}

const VisualIdentity = ({ colors, fontFamily }) => {
  const color = useContext(ThemeContext).primary || '#000000'
  const centerStyles = {
    placeItems: 'center center'
  }

  const gridTemplate = `
    'primary     primary     primary     primary       primary       primary'       4fr
    'secondary   secondary   secondary   empty-primary empty-primary empty-primary' 1fr
    'secondary   secondary   secondary   tertiary      tertiary      tertiary'      3fr
    'support-one support-one support-two support-two   support-three support-three' 1fr / 1fr 1fr 1fr 1fr 1fr 1fr
`
  const fullWidth = { width: '100%', height: '100%', display: 'flex', placeItems: 'center', placeContent: 'center' }
  const textColor = color => {
    // Assumes color is in hex format, like #FFFFFF
    const red = parseInt(color.slice(1, 3), 16)
    const green = parseInt(color.slice(3, 5), 16)
    const blue = parseInt(color.slice(5), 16)
    // TODO: add perceived brightness coefficients
    // 382.5 is half of 765 which is max brightness
    return red + green + blue > 382 ? '#000000' : '#FFFFFF'
  }
  const gridRow = gridArea => {
    const color = colors[gridArea]
    return <div style={{ gridArea, backgroundColor: color, color: textColor(color), ...fullWidth }}>{color}</div>
  }
  const grid = (
    <div style={{
      display: 'grid',
      flexBasis: '63%',
      flexGrow: 2,
      gridTemplate,
      ...centerStyles
    }}>
      {gridRow('primary')}
      {gridRow('secondary')}
      <div style={{ gridArea: 'empty-primary', backgroundColor: colors.primary, ...fullWidth }}>&nbsp;</div>
      {gridRow('tertiary')}
      {gridRow('support-one')}
      {gridRow('support-two')}
      {gridRow('support-three')}
    </div>
  )

  const SynchronizedTypewriter = useSynchronizedTypewriter()
  // The library will interpret HTML tags if we don't fool the parser.
  // So the following function has a zero-width space after <
  // https://en.wikipedia.org/wiki/Zero-width_space
  const generateTypewriterString = (heading, text) => `<​${heading}> ${text} </${heading}>`
  const h1String = generateTypewriterString('H1', '48')
  const viewBoxWidthMultiplier = viewBoxWidthMultipliers[fontFamily]

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
        <ScalableText text='A' color={color} customStyles={{ fontFamily }} viewBoxWidthMultiplier={viewBoxWidthMultiplier} />
        <ScalableText
          text='b'
          color='none'
          customStyles={{ fontFamily, stroke: color, strokeWidth: '0.1px' }}
          viewBoxWidthMultiplier={viewBoxWidthMultiplier}
        />
      </div>
      <h1><SynchronizedTypewriter string={fontFamily} styles={{ fontFamily }}/></h1>
      <hr />
      <h1><SynchronizedTypewriter string={h1String} styles={{ fontFamily }}/></h1>
      {/* Fix the container width */}
      <h1 style={{ visibility: 'hidden', whiteSpace: 'nowrap', maxHeight: 0 }}>{h1String}&nbsp;</h1>
      <hr />
      <h2><SynchronizedTypewriter string={generateTypewriterString('H2', '36')} styles={{ fontFamily }}/></h2>
      <hr />
      <h3><SynchronizedTypewriter string={generateTypewriterString('H3', '24')} styles={{ fontFamily }}/></h3>
      <hr />
      <h4><SynchronizedTypewriter string={generateTypewriterString('H4', '18')} styles={{ fontFamily }}/></h4>
      <hr />
      <h5><SynchronizedTypewriter string={generateTypewriterString('H5', '16')} styles={{ fontFamily }}/></h5>
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

VisualIdentity.propTypes = {
  colors: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    tertiary: PropTypes.string.isRequired,
    'support-one': PropTypes.string.isRequired,
    'support-two': PropTypes.string.isRequired,
    'support-three': PropTypes.string.isRequired
  }).isRequired,
  fontFamily: PropTypes.string.isRequired
}

export default VisualIdentity