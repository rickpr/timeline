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
import VisualIdentity from '../visual_identity'
import Takeaways from './takeaways'

const ZarasCleaning = () =>
  <div style={{ background: '#FAFAFA' }}>
    <App title="Zara's Cleaning" />
    <About />
    <Understand />
    <Define />
    <ContinueWatching />
    <Ideate />
    <Prototype />
    <SearchProcess />
    <Test />
    <NextSteps />
    <VisualIdentity
      colors={{
        primary: '#DB00FF',
        secondary: '#44156D',
        tertiary: '#2AE029',
        'support-one': '#15000F',
        'support-two': '#BDBDBD',
        'support-three': '#E0E0E0'
      }}
      fontFamily='Inter'
    />
    <Takeaways />
  </div>

export default ZarasCleaning
