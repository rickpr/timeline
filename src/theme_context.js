import React from 'react'

const Themes = {
  Logi: {
    name: 'Logi',
    description: 'A logistical shipping and tracking experience.',
    projectPage: '/adalida/projects/logi',
    heroPhoto: 'images/logi/title.png',

    // Colors
    primary: '#3357D2',
    background: '#3357D2',
    border: '#5FCCF0'
  },
  Zeno: {
    name: 'Zeno',
    description: 'A luxury e-commerce experience.',
    projectPage: '/adalida/projects/zeno',
    heroPhoto: 'images/zeno/title.png',

    // Colors
    primary: '#ED6112',
    background: '#ED6112',
    border: '#FFFFFF'
  },
  HBOMax: {
    name: 'HBOMax',
    description: 'Streaming fit for you.',
    projectPage: '/adalida/projects/hbo_max',
    heroPhoto: 'images/hbo_max/title.png',

    // Colors
    primary: '#DB00FF',
    background: 'linear-gradient(to bottom right, #05000F, #44156D)',
    border: '#DB00FF'
  },
  Cyph: {
    name: 'Cyph',
    description: "Learn about politicians' donors and history.",
    projectPage: '/adalida/projects/cyph',
    heroPhoto: 'images/cyph/title.png',

    // Colors
    primary: '#39FF14',
    background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)',
    border: '#39FF14'
  },
  'Hire Adi': {
    name: 'Hire Adi',
    description: '',
    heroPhoto: 'images/adalida_face.jpg',
    projectPage: '/adalida/about',

    // Colors
    primary: '#872234',
    background: '#000000',
    border: '#872234'
  },
}

const ThemeContext = React.createContext(Themes['Hire Adi'])
export { ThemeContext, Themes }
