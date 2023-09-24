import type { CSSProperties } from 'react'

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
  background: CSSProperties['background']
}

export const Projects: Record<string, Project> = {
  TLDR: {
    name: 'TL;DR',
    description: 'Tired of not understanding what you “agree” to when signing up for software? We are too, which is why we created a generative AI legalese summarizer',
    projectPage: '/projects/tldr',
    coverPhoto: TLDRPhoto,
    heroPhoto: TLDRPhoto,
    roles: [
      'Product Design',
      'SaaS',
      'B2C',
      '1 day Hackathon'
    ],
    background: '#59145F'
  },

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
    background: '#CAB8F5'
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
    background: '#2D2D31'
  },

  GainTain: {
    name: 'GainTain',
    description: 'Designed specifically for fitness enthusiasts who want to track their workout data extensively.',
    projectPage: '/projects/gaintain',
    coverPhoto: GainTainPhoto,
    roles: [
      'Product Design',
      'Visual Identity',
      'UX Design',
      'SaaS'
    ],
    background: 'linear-gradient(#FF512F, #DD2476)'
  }
}

export default Projects
