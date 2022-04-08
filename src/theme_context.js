import React from 'react'

import cyphHome from 'images/cyph/title.png'
const zenoHome = cyphHome

const Themes = {
  Cyph: {
    name: 'Cyph',
    description: 'A mobile social experience where users scan politicians and learn about their donors.',
    projectPage: '/adalida/projects/cyph',
    heroPhoto: cyphHome,

    // Colors
    primary: '#39FF14',
    background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)',
    border: '#39FF14'
  },
  Zeno: {
    name: 'Zeno',
    description: 'A fashion experience where you can shop for hours.',
    projectPage: '/adalida/projects/zeno',
    heroPhoto: zenoHome,

    // Colors
    primary: '#ED6112',
    background: '#ED6112',
    border: '#FFFFFF'
  }
}

const ThemeContext = React.createContext(Themes.Cyph)
export { ThemeContext, Themes }
