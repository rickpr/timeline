import React from 'react'
import renderer from 'react-test-renderer'

import ScalableText from '../scalable_text'

describe('ScalableText', () => {
  it('creates an svg', () => {
    const svg = renderer
      .create(<ScalableText text='A' color='#FFFFFF' />)
      .toJSON()
    // @ts-expect-error We're missing a type here
    expect(svg?.type).toEqual('svg')
  })

  it('uses the fill attribute to set the color', () => {
    const svg = renderer
      .create(<ScalableText text='b' color='#FFFFFF' />)
      .toJSON()
    // @ts-expect-error We're missing a type here
    expect(svg.props.style.fill).toEqual('#FFFFFF')
  })

  it('uses a good viewbox width', () => {
    const svg = renderer
      .create(<ScalableText text='A' color='#FFFFFF' />)
      .toJSON()
    // @ts-expect-error We're missing a type here
    expect(svg.props.viewBox).toEqual('0 4 13 15')
  })
})
