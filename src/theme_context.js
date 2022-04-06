import React from 'react'

import cyphHome from 'images/cyph/title.png'
const zenoHome = cyphHome

const Themes = {
  Cyph: {
    name: 'Cyph',
    description: "Cyph is a mobile app designed for voters interested in learning about politician's financial donors and political history.",
    projectPage: '/adalida/projects/cyph',
    heroPhoto: cyphHome,

    // Colors
    primary: '#39FF14',
    background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)'
  },
  Zeno: {
    name: 'Zeno',
    description: 'A fashion experience where you can shop for hours.',
    projectPage: '/adalida/projects/zeno',
    heroPhoto: zenoHome,

    // Colors
    primary: '#FFFFFF',
    background: '#ED6112'
  }
}

const ThemeContext = React.createContext(Themes.Cyph)
export { ThemeContext, Themes }
