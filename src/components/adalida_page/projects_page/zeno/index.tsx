import React from 'react'

import Project from '../project'
import About from './about'
import Understand from './understand'
import Define from './define'
import Ideate from './ideate'
import Prototype from './prototype'
import ProblemSolution from './problem_solution'
import NextSteps from './next_steps'
import VisualIdentity from '../visual_identity'
import Takeaways from './takeaways'

const Zeno = (): JSX.Element =>
  <Project>
    <About />
    <Understand />
    <Define />
    <Ideate />
    <Prototype />
    <ProblemSolution />
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
  </Project>

export default Zeno
