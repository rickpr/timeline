import React from 'react'
import renderer from 'react-test-renderer'

import ScalableText from '../scalable_text'

describe('ScalableText', () => {
  it('creates an svg', () => {
    const svg = renderer
      .create(<ScalableText text='Meow Wolf' color='#FFFFFF' />)
      .toJSON()
    expect(svg.type).toEqual('svg')
  })

  it('uses the fill attribute to set the color', () => {
    const svg = renderer
      .create(<ScalableText text='Adalida and Ricardo' color='#FFFFFF' />)
      .toJSON()
    expect(svg.props.style.fill).toEqual('#FFFFFF')
  })

  it('makes the viewbox width 9 times the string length', () => {
    const string = 'Adalida and Ricardo'
    const svg = renderer
      .create(<ScalableText text={string} color='#FFFFFF' />)
      .toJSON()
    const letterCount = string.length
    const expectedWidth = 9 * letterCount
    expect(svg.props.viewBox).toEqual(`0 0 ${expectedWidth} 17`)
  })
})
