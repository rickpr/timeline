import React from 'react'

import Card from '../card'

import ThinkOne from 'images/zaras_cleaning/think/1.png'
import ThinkTwo from 'images/zaras_cleaning/think/2.png'
import ThinkThree from 'images/zaras_cleaning/think/3.jpg'

import 'sass/adalida_page/project.scss'

const Think = () =>
  <Card>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px', maxWidth: '1300px', margin: 'auto' }}>
      <img alt="Zara's Cleaning Testimonial" src={ThinkOne} style={{ width: '100%', maxWidth: '400px' }} />
      <img alt="Zara's Cleaning Testimonial" src={ThinkTwo} style={{ width: '100%', maxWidth: '400px' }} />
      <img alt="Zara's Cleaning Testimonial" src={ThinkThree} style={{ width: '100%', maxWidth: '400px' }} />
    </div>
  </Card>

export default Think
