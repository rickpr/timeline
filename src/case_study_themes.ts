import type { Theme } from './theme_context'
import PhronesisPhoto from 'images/phronesis/cover.webp'
import PhronesisHeroPhoto from 'images/phronesis/title.jpg'
import GainTainPhoto from 'images/gaintain/cover.png'
import TLDRPhoto from 'images/tldr.webp'

interface CaseStudyTheme extends Omit<Theme, 'link'> {
  link: {
    text: 'READ CASE STUDY' | 'VIEW PRESENTATION'
    url: string
  }
}

const CaseStudyThemes: Record<string, CaseStudyTheme> = {
  TLDR: {
    name: 'TL;DR',
    description: 'Tired of not understanding what you “agree” to when signing up for software? We are too, which is why we created a generative AI legalese summarizer',
    coverPhoto: TLDRPhoto,
    heroPhoto: TLDRPhoto,
    roles: [
      '1 day Hackathon',
      'Product Design',
      'Prototyping'
    ],
    link: {
      text: 'VIEW PRESENTATION',
      url: 'https://docs.google.com/presentation/d/1qXeKJTsfPWMx_gYd4cbBtRxIbwm7jJqWRpy747TrlWM'
    }
  },
  Phronesis: {
    name: 'Phronesis',
    description: 'Seamlessly access important information, communicate effectively, and take control of your academic journey with ease.',
    coverPhoto: PhronesisPhoto,
    heroPhoto: PhronesisHeroPhoto,
    roles: [
      'Visual Identity',
      'User Interface Design',
      'SaaS',
      'B2B'
    ],
    link: {
      text: 'READ CASE STUDY',
      url: '/case_studies/phronesis'
    }
  },

  GainTain: {
    name: 'GainTain',
    description: 'Designed specifically for fitness enthusiasts who want to track their workout data extensively.',
    coverPhoto: GainTainPhoto,
    roles: [
      'User Interaction Design',
      'UX Design',
      'SaaS',
      'B2C'
    ],
    link: {
      text: 'READ CASE STUDY',
      url: '/case_studies/gaintain'
    }
  }
}

export default CaseStudyThemes
