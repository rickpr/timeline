import type { CSSProperties } from 'react'

import type { Theme } from './theme_context'
import AirbrushArtStudioPhoto from 'images/airbrush_art_studio/cover.png'
import PhronesisPhoto from 'images/phronesis/cover.webp'
import PhronesisHeroPhoto from 'images/phronesis/title.jpg'
import GainTainPhoto from 'images/gaintain/cover.png'
import TLDRPhoto from 'images/tldr/cover.png'

interface CaseStudyTheme extends Theme {
  scrollBar: CSSProperties['background']
  caseStudyPage: string
}

const CaseStudyThemes: Record<string, CaseStudyTheme> = {
  AirbrushArtStudio: {
    name: 'Airbrush Art',
    description: 'A unique digital portfolio showcasing the remarkable talents of Armando Diaz, a distinguished artist hailing from New Mexico.',
    caseStudyPage: '/case_studies/airbrush_art_studio',
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
    caseStudyPage: '/case_studies/tldr',
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
    caseStudyPage: '/case_studies/phronesis',
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
    caseStudyPage: '/case_studies/gaintain',
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

export default CaseStudyThemes
