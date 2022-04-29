
import React from 'react'

import App from '../../app'
import About from './about'
import Understand from './understand'
import Define from './define'
import ContinueWatching from './continue_watching'
import Ideate from './ideate'
import Prototype from './prototype'
import SearchProcess from './search_process'
import Test from './test'
import NextSteps from './next_steps'
import VisualIdentity from './visual_identity'
import Takeaways from './takeaways'

const Zeno = () =>
  <div style={{ background: '#FAFAFA' }}>
    <App title='HBOMax' />
    <About />
    <Understand />
    <Define />
    <ContinueWatching />
    <Ideate />
    <Prototype />
    <SearchProcess />
    <Test />
    <NextSteps />
    <VisualIdentity />
    <Takeaways />
  </div>

export default Zeno
