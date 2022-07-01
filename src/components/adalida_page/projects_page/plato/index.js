
import React from 'react'

import App from '../../app'
import About from './about'
import Understand from './understand'
import Define from './define'
import Ideate from './ideate'
import Prototype from './prototype'
import Test from './test'
import NextSteps from './next_steps'
import VisualIdentity from '../visual_identity'
import Takeaways from './takeaways'

const Plato = () =>
  <div style={{ background: '#FAFAFA' }}>
    <App title='Plato' />
    <About />
    <Understand />
    <Define />
    <Ideate />
    <Prototype />
    <Test />
    <NextSteps />
    <VisualIdentity
      colors={{
        primary: '#ED6112',
        secondary: '#424242',
        tertiary: '#212121',
        'support-one': '#C4C4C4',
        'support-two': '#FFFFFF',
        'support-three': '#BDBDBD'
      }}
      fontFamily='Bodoni'
    />
    <Takeaways />
  </div>

export default Plato
