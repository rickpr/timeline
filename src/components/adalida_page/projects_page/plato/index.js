
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
    <Prototype />
    <Ideate />
    <VisualIdentity
      colors={{
        primary: '#3357D2',
        secondary: '#5FCCF0',
        tertiary: '#0C133D',
        'support-one': '#F3F6FD',
        'support-two': '#B4B1B3',
        'support-three': '#BFBFBF'
      }}
      fontFamily='Inter'
    />
    <Takeaways />
  </div>

export default Plato
