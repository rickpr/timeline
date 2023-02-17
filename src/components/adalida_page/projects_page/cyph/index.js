import React from 'react'

import Project from '../project'
import About from './about'
import Understand from './understand'
import Define from './define'
import IdeateOne from './ideate_one'
import PrototypeOne from './prototype_one'
import Test from './test'
import IdeateTwo from './ideate_two'
import PrototypeTwo from './prototype_two'
import NextSteps from './next_steps'
import VisualIdentity from '../visual_identity'
import Takeaways from './takeaways'

const Cyph = () =>
  <Project>
    <About />
    <Understand />
    <Define />
    <IdeateOne />
    <PrototypeOne />
    <Test />
    <IdeateTwo />
    <PrototypeTwo />
    <NextSteps />
    <VisualIdentity
      colors={{
        primary: '#000000',
        secondary: '#4A00E0',
        tertiary: '#8E2DE2',
        'support-one': '#72787E',
        'support-two': '#FFFFFF',
        'support-three': '#C7C6C4'
      }}
      fontFamily='Inconsolata'
    />
    <Takeaways />
  </Project>

export default Cyph
