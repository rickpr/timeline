import type { Theme } from 'theme_context'

import JessRuedaImage from 'images/works/jessrueda.webp'
import AirbrushImage from 'images/works/airbrush.webp'
import ZaraImage from 'images/works/zara.webp'
import SunbeltImage from 'images/works/sunbelt.webp'
import NCERWImage from 'images/works/ncerw.webp'
import LoboGardensImage from 'images/works/lobogardens.webp'

export interface WorkTheme extends Omit<Theme, 'link'> {
  link: {
    text: 'VISIT WEBSITE'
    url: string
  }
}

export const Works: Record<string, WorkTheme> = {
  JessNRuead: {
    name: 'JessNRueda',
    roles: ['Website Design', 'Responsive', 'Shopify'],
    description: 'Artist selling fine prints and stickers.',
    coverPhoto: JessRuedaImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://jessnrueda.com/'
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
      url: 'https://sustainability.unm.edu/campus-action/lobo-gardens.html'
    }
  }
}
