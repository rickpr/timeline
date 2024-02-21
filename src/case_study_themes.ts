import type { Theme } from './theme_context'
import AirbrushArtStudioPhoto from 'images/airbrush_art_studio/cover.png'
import PhronesisPhoto from 'images/phronesis/cover.webp'
import PhronesisHeroPhoto from 'images/phronesis/title.jpg'
import GainTainPhoto from 'images/gaintain/cover.png'
import TLDRPhoto from 'images/tldr/cover.png'

interface CaseStudyTheme extends Omit<Theme, 'link'> {
  link: {
    text: 'READ CASE STUDY'
    url: string
  }
}

const CaseStudyThemes: Record<string, CaseStudyTheme> = {
  AirbrushArtStudio: {
    name: 'Airbrush Art',
    description: 'A unique digital portfolio showcasing the remarkable talents of Armando Diaz, a distinguished artist hailing from New Mexico.',
    coverPhoto: AirbrushArtStudioPhoto,
    heroPhoto: AirbrushArtStudioPhoto,
    roles: [
      'Web Design',
      'Responsive Design',
      'Copywriting'
    ],
    link: {
      text: 'READ CASE STUDY',
      url: '/case_studies/airbrush_art_studio'
    }
  },

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
      text: 'READ CASE STUDY',
      url: '/case_studies/tldr'
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