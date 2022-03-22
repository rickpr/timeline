
import React from 'react'

import App from '../../app'
import Summary from './summary'
import Research from './research'
import Design from './design'
import Prototype from './prototype'
import Test from './test'
import DesignTwo from './design_two'
import TestTwo from './test_two'
import DesignThree from './design_three'
import FinalThoughts from './final_thoughts'

const Cyph = () =>
  <div style={{ background: '#FAFAFA' }}>
    <App title='Cyph' />
    <Summary />
    <Research />
    <Design />
    <Prototype />
    <Test />
    <DesignTwo />
    <TestTwo />
    <DesignThree />
    <FinalThoughts />
  </div>

export default Cyph
