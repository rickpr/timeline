import type { Theme } from './themes'

import AirbrushImage from 'images/works/airbrush.webp'
import GainTainPhoto from 'images/gaintain/cover.png'
import JessRuedaImage from 'images/works/jessrueda.webp'
import LoboGardensImage from 'images/works/lobogardens.webp'
import NCERWImage from 'images/works/ncerw.webp'
import PhronesisHeroPhoto from 'images/phronesis/title.jpg'
import PhronesisPhoto from 'images/phronesis/cover.webp'
import QuerqueImage from 'images/works/querque.webp'
import SunbeltImage from 'images/works/sunbelt.webp'
import TLDRPhoto from 'images/tldr.webp'
import ZaraImage from 'images/works/zara.webp'

export interface ProjectTheme extends Theme {
  name: string
  heroPhoto?: string
  subtitle?: string
  description: string
  coverPhoto?: string
  roles: string[]
  link: {
    text: 'READ CASE STUDY' | 'VIEW PRESENTATION' | 'VISIT WEBSITE' | 'VIEW FIGMA' | 'VIEW DESIGNS'
    url: string
  }
}

export const ProjectThemes: Record<string, ProjectTheme> = {
  QuerQueCandles: {
    name: 'QuerQue Candles',
    roles: ['Brand Identity', 'Graphic Design'],
    description: 'Candle shop specializing in handcrafted candles.',
    coverPhoto: QuerqueImage,
    link: {
      text: 'VIEW FIGMA',
      url: 'https://www.figma.com/file/3yeMcqsp6NQ5bf7EnJVrCH/QuerQue-Candles?type=design&node-id=0-1'
    }
  },
  JessNRueda: {
    name: 'JessNRueda',
    roles: ['Website Design', 'Responsive', 'Shopify'],
    description: 'Artist selling fine prints and stickers.',
    coverPhoto: JessRuedaImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://jessnrueda.com/'
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
  },
  AirbrushArtStudio: {
    name: 'Airbrush Art Studio',
    roles: ['Website Design', 'Responsive', 'Editor X'],
    description: 'Professional portfolio for a New Mexican Muralist',
    coverPhoto: AirbrushImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://www.airbrushart.studio/'
    }
  },
  ZarasCleaning: {
    name: "Zara's Cleaning",
    roles: ['Website Design', 'Responsive', 'Editor X'],
    description: 'Cleaning service located in Albuquerque New Mexico.',
    coverPhoto: ZaraImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://www.zarascleaning.com/'
    }
  },
  SunbeltProperties: {
    name: 'Sunbelt Properties',
    roles: ['Website Design', 'Responsive', 'Wix'],
    description: 'Sunbelt Properties, Inc. is a residential and commercial construction services company in the Albuquerque offering service since 1979.',
    coverPhoto: SunbeltImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://www.sunbeltpropertiesnm.com/'
    }
  },
  NCERW: {
    name: 'NCERW',
    roles: ['Website Design', 'Responsive', 'Google Sites'],
    description: 'Represents a constellation of stakeholders locally and nationally centered around educational principles and cultural practices that promote the ecological relationships of language and literacy.',
    coverPhoto: NCERWImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://sites.google.com/site/ncenvirorhetoric/'
    }
  },
  LoboGardens: {
    name: 'Lobo Gardens',
    roles: ['Volunteer', 'Business Cards', 'Event Flyers', 'Branding'],
    description: 'Represents a constellation of stakeholders locally and nationally centered around educational principles and cultural practices that promote the ecological relationships of language and literacy.',
    coverPhoto: LoboGardensImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://dribbble.com/shots/16868644-Flyer-Designs-Business-Card-and-Brochure-Lobo-Gardens'
    }
  }
}

export default ProjectThemes
