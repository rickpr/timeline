import React from 'react'

const Themes = {
  Cyph: {
    name: 'Cyph',
    description: "Cyph is a mobile app designed for voters interested in learning about politician's financial donors and political history.",
    projectPage: '/adalida/projects/cyph',
    heroPhoto: 'images/cyph/title.png',

    // Colors
    primary: '#39FF14',
    background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)',
    border: '#39FF14'
  },
  Zeno: {
    name: 'Zeno',
    description: 'A luxury e-commerce experience.',
    projectPage: '/adalida/projects/zeno',
    heroPhoto: 'images/cyph/title.png',

    // Colors
    primary: '#FFFFFF',
    background: '#ED6112',
    border: '#FFFFFF'
  },
  Splash: {
    name: 'Hire Adi',
    description: '',
    heroPhoto: 'images/adalida_face.jpg',
    projectPage: '/adalida/about',

    // Colors
    primary: '#39FF14',
    background: '#000000',
    border: '#39FF14'
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
  }
}

const ThemeContext = React.createContext(Themes.Cyph)
export { ThemeContext, Themes }
