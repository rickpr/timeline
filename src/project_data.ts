import type { CSSProperties } from 'react'

import Favicon from 'images/favicon.png'
import AirbrushArtStudioPhoto from 'images/airbrush_art_studio/cover.png'
import PhronesisPhoto from 'images/phronesis/cover.webp'
import PhronesisHeroPhoto from 'images/phronesis/title.jpg'
import GainTainPhoto from 'images/gaintain/cover.png'
import TLDRPhoto from 'images/tldr/cover.png'

export interface Project {
  name: string
  description: string
  projectPage: string
  coverPhoto: string
  heroPhoto?: string
  roles: string[]
  scrollBar: CSSProperties['background']
  lightModeBackground?: CSSProperties['background']
  darkModeBackground?: CSSProperties['background']
}

export const About: Project = {
  name: 'About Adalida',
  description: '',
  coverPhoto: Favicon,
  heroPhoto: Favicon,
  projectPage: '/about',
  roles: [],
  scrollBar: '#FE347E',
  lightModeBackground: 'linear-gradient(117deg, #D2D6D9 -8.17%, rgba(210, 164, 208, 0.99) 46.24%, #D5D5D5 98.47%), linear-gradient(248deg, #464046 13.28%, #8D2470 58.07%, #464040 90.12%)',
  darkModeBackground: 'linear-gradient(248deg, #464046 13.28%, #8D2470 58.07%, #464040 90.12%)'
}

export const Projects: Record<string, Project> = {

  AirbrushArtStudio: {
    name: 'Airbrush Art',
    description: 'A unique digital portfolio showcasing the remarkable talents of Armando Diaz, a distinguished artist hailing from New Mexico.',
    projectPage: '/projects/airbrush_art_studio',
    coverPhoto: AirbrushArtStudioPhoto,
    heroPhoto: AirbrushArtStudioPhoto,
    roles: [
      'Web Design',
      'Responsive Design',
      'Copywriting'
    ],
    scrollBar: '#CAB8F5'
  },

  TLDR: {
    name: 'TL;DR',
    description: 'Tired of not understanding what you “agree” to when signing up for software? We are too, which is why we created a generative AI legalese summarizer',
    projectPage: '/projects/tldr',
    coverPhoto: TLDRPhoto,
    heroPhoto: TLDRPhoto,
    roles: [
      '1 day Hackathon',
      'Product Design',
      'Prototyping'
    ],
    scrollBar: '#59145F'
  },

  Phronesis: {
    name: 'Phronesis',
    description: 'Seamlessly access important information, communicate effectively, and take control of your academic journey with ease.',
    projectPage: '/projects/phronesis',
    coverPhoto: PhronesisPhoto,
    heroPhoto: PhronesisHeroPhoto,
    roles: [
      'Visual Identity',
      'User Interface Design',
      'SaaS',
      'B2B'
    ],
    scrollBar: '#2D2D31'
  },

  GainTain: {
    name: 'GainTain',
    description: 'Designed specifically for fitness enthusiasts who want to track their workout data extensively.',
    projectPage: '/projects/gaintain',
    coverPhoto: GainTainPhoto,
    roles: [
      'User Interaction Design',
      'UX Design',
      'SaaS',
      'B2C'
    ],
    scrollBar: 'linear-gradient(#FF512F, #DD2476)'
  }
}

export default Projects
