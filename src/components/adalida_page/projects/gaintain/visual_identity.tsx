import React, { useContext } from 'react'

import ScalableText from 'components/scalable_text'
import useDarkModeStyle from 'hooks/use_dark_mode_style'
import useSynchronizedTypewriter from 'hooks/use_synchronized_typewriter'
import { ThemeContext } from 'theme_context'

import Card from '../card'

const VisualIdentity = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(darkMode)
  const fontFamily = 'Avenir Next'
  const centerStyles = { placeItems: 'center center' }

  const fullWidth = { width: '100%', height: '100%', display: 'flex', placeItems: 'center', placeContent: 'center' }
  const glassMorphism = {
    borderRadius: '10px',
    boxShadow: '0 5px 5px -1px #152163',
    background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))',
    backdropFilter: 'blur(24px)'
  }

  const grid = (
    <div style={{
      flexBasis: '63%',
      flexGrow: 2,
      padding: '5%',
      minHeight: '500px',
      background: 'linear-gradient(to bottom right, #FF512F, #BB2476)',
      ...centerStyles
    }}>
      <div style={{
        opacity: 0.5,
        ...glassMorphism,
        ...fullWidth
      }}>
        <div style={{
          ...glassMorphism,
          ...fullWidth,
          width: '80%',
          height: '80%'
        }}>
          <div style={{
            ...glassMorphism,
            ...fullWidth,
            width: '80%',
            height: '80%'
          }}>
            <div style={{
              ...glassMorphism,
              ...fullWidth,
              width: '80%',
              height: '80%'
            }} />
          </div>
        </div>
      </div>
    </div>
  )

  const SynchronizedTypewriter = useSynchronizedTypewriter()
  // The library will interpret HTML tags if we don't fool the parser.
  // So the following function has a zero-width space after <
  // https://en.wikipedia.org/wiki/Zero-width_space
  // eslint-disable-next-line no-irregular-whitespace
  const generateTypewriterString = (heading: string, text: string): string => `<​${heading}> ${text} </${heading}>`
  const h1String = generateTypewriterString('H1', '48')
  const viewBoxWidthMultiplier = 12

  const typography = (
    <div style={{ flexBasis: '31%', flexGrow: 3, flexShrink: 1 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
      }}>
        <ScalableText text='A' color={color as string} customStyles={{ fontFamily }} viewBoxWidthMultiplier={viewBoxWidthMultiplier} />
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
    <Card>
      <div style={style}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6%',
          alignItems: 'stretch',
          width: '100%'
        }}>
          {grid}
          {typography}
        </div>
      </div>
    </Card>
  )
}

export default VisualIdentity
