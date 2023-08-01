import React from 'react'
import renderer from 'react-test-renderer'

import useSynchronizedTypewriter from '../use_synchronized_typewriter'

describe('useSynchronizedTyperwriter', () => {
  it('creates a div with whitespace: nowrap', () => {
    const FunctionComponent = () => {
      const SynchronizedTypewriter = useSynchronizedTypewriter()
      return <SynchronizedTypewriter string='test' />
    }
    const component = renderer.create(<FunctionComponent />).toJSON()
    expect(component.props.style).toEqual({ whiteSpace: 'nowrap' })
  })
})
