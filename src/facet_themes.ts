import type { Theme } from './theme_context'
import WhoPhoto from 'images/facets/who.webp'
import WhatPhoto from 'images/facets/what.webp'
import WherePhoto from 'images/facets/where.webp'
import HowPhoto from 'images/facets/how.webp'
import WhyPhoto from 'images/facets/why.webp'

interface FacetTheme extends Theme {
  subtitle: string
  link?: {
    text: string
    url: string
  }
}

const FacetThemes: Record<string, FacetTheme> = {
  Who: {
    name: 'Who am I?',
    subtitle: "Hi, I'm Adalida Baca",
    description: 'Welcome to my design portfolio.',
    coverPhoto: WhoPhoto,
    roles: [
      'About',
      'Contact',
      'Background'
    ],
    darkModeBackground: 'linear-gradient(248deg, #464046 13.28%, #8D2470 58.07%, #464040 90.12%)',
    lightModeBackground: 'linear-gradient(246deg, #D2D6D9 0%, rgba(210, 164, 208, 0.99) 47.65%, #D5D5D5 93.39%)'
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
    darkModeBackground: 'linear-gradient(248deg, #464046 13.28%, #24878D 58.07%, #464040 90.12%)',
    lightModeBackground: 'linear-gradient(248deg, #D2D6D9 13.28%, #A4D2D0 58.07%, #D2D6D9 90.12%)',
    link: {
      text: 'View case studies',
      url: '/case_studies'
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
    darkModeBackground: 'linear-gradient(248deg, #464046 13.28%, #245B8D 58.07%, #464040 90.12%)',
    lightModeBackground: 'linear-gradient(248deg, #D2D6D9 13.28%, #A4C1D2 58.07%, #D2D6D9 90.12%)',
    link: {
      text: 'View case studies',
      url: '/case_studies'
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
    darkModeBackground: 'linear-gradient(248deg, #464046 13.28%, #8D5D24 55.3%, #464040 90.12%)',
    lightModeBackground: 'linear-gradient(248deg, #D2D6D9 13.28%, #D2C0A4 58.07%, #D2D6D9 90.12%)',
    link: {
      url: 'https://www.interaction-design.org/adalida-baca',
      text: "View Adalida's IxDF profile"
    }
  },
  Why: {
    name: 'Why?',
    subtitle: "I'm a Problem Solver",
    description: 'I learned the joy and importance of solving real world problems at a young age. Growing up, UX was not a career path, but I was practicing UX in how I approached problems and designed solutions.',
    coverPhoto: WhyPhoto,
    roles: [
      'Business Problems',
      'People Problems',
      'Design Problems'
    ],
    darkModeBackground: 'linear-gradient(248deg, #464046 13.28%, #59248D 58.07%, #464040 90.12%)',
    lightModeBackground: 'linear-gradient(248deg, #D2D6D9 13.28%, #C3A4D2 58.07%, #D2D6D9 90.12%)',
    link: {
      text: 'Read my Story',
      url: '/about'
    }
  }
}

export default FacetThemes
