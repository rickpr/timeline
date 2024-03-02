import { lightColor, type Theme } from './theme_context'

import WhoPhoto from 'images/facets/who.webp'
import WhatPhoto from 'images/facets/what.webp'
import WherePhoto from 'images/facets/where.webp'
import HowPhoto from 'images/facets/how.webp'
import WhyPhoto from 'images/facets/why.webp'

interface FacetTheme extends Omit<Theme, 'subtitle'> {
  subtitle: string
}

const FacetThemes: Record<string, FacetTheme> = {
  Who: {
    name: 'Who am I?',
    subtitle: "Hi, I'm Adalida Baca",
    description: 'I craft digital dreams one pixel at a time.',
    coverPhoto: WhoPhoto,
    roles: [
      'About',
      'Contact',
      'Background'
    ],
    colors: {
      darkMode: {
        background: 'linear-gradient(248deg, #464046 13.28%, #8D2470 58.07%, #464040 90.12%)',
        text: lightColor
      },
      lightMode: {
        background: 'linear-gradient(248deg, #D2D6D9 0%, rgba(210, 164, 208, 0.99) 58.07%, #D5D5D5 90.12%)',
        text: lightColor
      }
    },
    link: {
      text: 'Read my story',
      url: '/about'
    }
  },
  What: {
    name: 'What do I do?',
    subtitle: "I'm a Product Designer",
    description: 'Specializing in empowering small businesses by crafting websites that not only showcase their company, but also drive engagement and sales.',
    coverPhoto: WhatPhoto,
    roles: [
      'Web Design',
      'Brand Identity',
      'Product Design'
    ],
    colors: {
      darkMode: {
        background: 'linear-gradient(248deg, #464046 13.28%, #24878D 58.07%, #464040 90.12%)',
        text: lightColor
      },
      lightMode: {
        background: 'linear-gradient(248deg, #D2D6D9 13.28%, #A4D2D0 58.07%, #D2D6D9 90.12%)',
        text: lightColor
      }
    },
    link: {
      text: "Let's work together",
      url: '/services'
    }
  },
  Where: {
    name: 'Where am I going in my career?',
    subtitle: "I'm a Disruptor",
    description: "I'm growing my skills to break into the start up industry. My case studies cover problem solving in the design, prototyping, animation, research, and product design space.",
    coverPhoto: WherePhoto,
    roles: [
      'User Research',
      'UX Design',
      'Animation',
      'Figma'
    ],
    colors: {
      darkMode: {
        background: 'linear-gradient(248deg, #464046 13.28%, #245B8D 58.07%, #464040 90.12%)',
        text: lightColor
      },
      lightMode: {
        background: 'linear-gradient(248deg, #D2D6D9 13.28%, #A4C1D2 58.07%, #D2D6D9 90.12%)',
        text: lightColor
      }
    },
    link: {
      text: 'View case studies',
      url: '/'
    }
  },
  How: {
    name: 'How do I grow?',
    subtitle: "I'm an IxDF Member",
    description: 'The Interaction Design Foundation (IxDF) is my go to learning portal. Check out my profile for my course history and performance!',
    coverPhoto: HowPhoto,
    roles: [
      'Journey Mapping',
      'Data Driven Design',
      'User Research Methods'
    ],
    colors: {
      darkMode: {
        background: 'linear-gradient(248deg, #464046 13.28%, #8D5D24 55.3%, #464040 90.12%)',
        text: lightColor
      },
      lightMode: {
        background: 'linear-gradient(248deg, #D2D6D9 13.28%, #D2C0A4 58.07%, #D2D6D9 90.12%)',
        text: lightColor
      }
    },
    link: {
      url: 'https://www.interaction-design.org/members/adalida-baca',
      text: "View Adalida's IxDF profile"
    }
  },
  Why: {
    name: 'Why?',
    subtitle: "I'm a Problem Solver",
    description: 'I enjoy designing elegant and functional solutions best fit for the user and business needs.',
    coverPhoto: WhyPhoto,
    roles: [
      'Insightful',
      'Resourceful',
      'Utility Player'
    ],
    colors: {
      darkMode: {
        background: 'linear-gradient(248deg, #464046 13.28%, #59248D 58.07%, #464040 90.12%)',
        text: lightColor
      },
      lightMode: {
        background: 'linear-gradient(248deg, #D2D6D9 13.28%, #C3A4D2 58.07%, #D2D6D9 90.12%)',
        text: lightColor
      }
    }
  }
}

export default FacetThemes
