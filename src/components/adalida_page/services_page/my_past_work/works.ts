import JessRuedaImage from 'images/works/jessrueda.webp'
import AirbrushImage from 'images/works/airbrush.webp'
import ZaraImage from 'images/works/zara.webp'
import SunbeltImage from 'images/works/sunbelt.webp'
import NCERWImage from 'images/works/ncerw.webp'
import LoboGardensImage from 'images/works/lobogardens.webp'

export interface Work {
  name: string
  badges: string[]
  description: string
  url: string
  coverImage: string
}

export const Works: Work[] = [
  {
    name: 'Jessica Rueda',
    badges: ['Website Design', 'Responsive', 'Shopify'],
    description: 'Artist selling fine prints and stickers.',
    url: 'https://jessnrueda.com/',
    coverImage: JessRuedaImage
  },
  {
    name: 'Airbrush Art Studio',
    badges: ['Website Design', 'Responsive', 'Editor X'],
    description: 'Professional portfolio for a New Mexican Muralist',
    url: 'https://www.airbrushart.studio/',
    coverImage: AirbrushImage
  },
  {
    name: "Zara's Cleaning",
    badges: ['Website Design', 'Responsive', 'Editor X'],
    description: 'Cleaning service located in Albuquerque New Mexico.',
    url: 'https://www.zarascleaning.com/',
    coverImage: ZaraImage
  },
  {
    name: 'Sunbelt Properties',
    badges: ['Website Design', 'Responsive', 'Wix'],
    description: 'Sunbelt Properties, Inc. is a residential and commercial construction services company in the Albuquerque offering service since 1979.',
    url: 'https://www.sunbeltpropertiesnm.com/',
    coverImage: SunbeltImage
  },
  {
    name: 'NCERW',
    badges: ['Website Design', 'Responsive', 'Google Sites'],
    description: 'Represents a constellation of stakeholders locally and nationally centered around educational principles and cultural practices that promote the ecological relationships of language and literacy.',
    url: 'https://sites.google.com/site/ncenvirorhetoric/',
    coverImage: NCERWImage
  },
  {
    name: 'Lobo Gardens',
    badges: ['Volunteer', 'Business Cards', 'Event Flyers', 'Branding'],
    description: 'Represents a constellation of stakeholders locally and nationally centered around educational principles and cultural practices that promote the ecological relationships of language and literacy.',
    url: 'https://sustainability.unm.edu/campus-action/lobo-gardens.html',
    coverImage: LoboGardensImage
  }
]
