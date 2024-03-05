import { lightColor, type Theme } from './theme_context'

import HowPhoto from 'images/facets/how.webp'
import WhatPhoto from 'images/facets/what.webp'
import WherePhoto from 'images/facets/where.webp'
import WhoPhoto from 'images/facets/who.webp'

interface FacetTheme extends Omit<Theme, 'subtitle'> {
  subtitle: string
}

const FacetThemes: Record<string, FacetTheme> = {
  Contact: {
    name: 'Contact',
    subtitle: "Hi, I'm Adalida Baca",
    description: "Specializing in crafting products that are as functional as they are visually appealing, I'm on the search for my next opportunity to make a significant impact.",
    coverPhoto: HowPhoto,
    roles: [
      'Insightful',
      'Resourceful',
      'Utility Player'
    ],
    colors: {
      darkMode: {
        background: '#8D2470',
        text: lightColor
      },
      lightMode: {
        background: '#D2A4D0',
        text: lightColor
      }
    },
    link: {
      text: "Let's chat",
      url: 'mailto:hi@adalida.design'
    }
  },
  Portfolio: {
    name: 'Portfolio',
    subtitle: "I'm a Product Designer",
    description: 'Check out my portfolio where I design aesthetically pleasing and functional solutions.',
    coverPhoto: WhatPhoto,
    roles: [
      'Figma',
      'User Research',
      'UX Design',
      'Animation'
    ],
    colors: {
      darkMode: {
        background: '#24878D',
        text: lightColor
      },
      lightMode: {
        background: '#A4D2D0',
        text: lightColor
      }
    },
    link: {
      text: 'View portfolio',
      url: '/portfolio'
    }
  },
  Services: {
    name: 'Services',
    subtitle: "I'm a Freelance Designer",
    description: 'Specializing in empowering small businesses by crafting websites that not only showcase their company, but also drive engagement and sales.',
    coverPhoto: WherePhoto,
    roles: [
      'Web Design',
      'Brand Identity',
      'Product Design'
    ],
    colors: {
      darkMode: {
        background: '#245B8D',
        text: lightColor
      },
      lightMode: {
        background: '#A4C1D2',
        text: lightColor
      }
    },
    link: {
      text: 'View services',
      url: '/services'
    }
  },
  About: {
    name: 'About',
    subtitle: "I'm a Burqueña",
    description: 'I grew up one block from the famous Los Pollos Hermanos in the show Breaking Bad. Now, I’m transplanted in San Francisco. Read more about me and my professional background here.',
    coverPhoto: WhoPhoto,
    roles: [
      'UNM',
      'Interdisciplinary BA',
      'English-Philosophy'
    ],
    colors: {
      darkMode: {
        background: '#8D5D24',
        text: lightColor
      },
      lightMode: {
        background: '#D2C0A4',
        text: lightColor
      }
    },
    link: {
      url: '/about',
      text: 'View About'
    }
  }
}

export default FacetThemes
