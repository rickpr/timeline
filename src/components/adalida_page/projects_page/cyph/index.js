import React from 'react'

import App from '../../app'
import About from './about'
import Understand from './understand'
import Define from './define'
import Ideate from './ideate'
import Prototype from './prototype'
import Test from './test'
import NextSteps from './next_steps'
import VisualIdentity from './visual_identity'
import Takeaways from './takeaways'

const Cyph = () =>
  <div style={{ background: '#F5F5F5' }}>
    <App title='Cyph' />
    <About />
    <Understand />
    <Define />
    <Ideate />
    <Prototype />
    <Test />
    <NextSteps />
    <VisualIdentity />
    <Takeaways />
  </div>

export default Cyph
