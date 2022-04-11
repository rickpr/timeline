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
    description: 'A fashion experience where you can shop for hours.',
    projectPage: '/adalida/projects/zeno',
    heroPhoto: 'images/cyph/title.png',

    // Colors
    primary: '#ED6112',
    background: '#ED6112',
    border: '#FFFFFF'
  },
  'Hire Adi': {
    name: 'Hire Adi',
    description: '',
    projectPage: '/adalida/projects/cyph',
    heroPhoto: 'images/cyph/title.png',

    // Colors
    primary: '#39FF14',
    background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)',
    border: '#39FF14'
  }
}

const ThemeContext = React.createContext(Themes.Cyph)
export { ThemeContext, Themes }
