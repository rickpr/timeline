import React from 'react'

import App from '../../app'
import About from './about'
import Understand from './understand'
import Define from './define'
import IdeateOne from './ideate_one'
import PrototypeOne from './prototype_one'
import Test from './test'
import IdeateTwo from './ideate_two'
import PrototypeTwo from './prototype_two'
import NextSteps from './next_steps'
import VisualIdentity from './visual_identity'
import Takeaways from './takeaways'

const Cyph = () =>
  <div style={{ background: '#F5F5F5' }}>
    <App title='Cyph' />
    <About />
    <Understand />
    <Define />
    <IdeateOne />
    <PrototypeOne />
    <Test />
    <IdeateTwo />
    <PrototypeTwo />
    <NextSteps />
    <VisualIdentity />
    <Takeaways />
  </div>

export default Cyph
