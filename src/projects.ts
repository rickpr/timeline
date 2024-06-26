import AirbrushImage from 'images/works/airbrush.webp'
import AirbrushLogo from 'images/works/airbrush_logo.webp'
import GainTainPhoto from 'images/gaintain/next_steps.webp'
import JessRuedaImage from 'images/works/jessrueda.webp'
import JessRuedaLogo from 'images/works/jessrueda_logo.webp'
import LoboGardensImage from 'images/works/lobogardens.webp'
import LoboGardensLogo from 'images/works/lobogardens_logo.webp'
import PhronesisPhoto from 'images/works/phronesis.webp'
import PhronesisLogo from 'images/works/phronesis_logo.webp'
import QuerqueImage from 'images/works/querque.webp'
import QuerqueLogo from 'images/works/querque_logo.webp'
import SunbeltImage from 'images/works/sunbelt.webp'
import TLDRLogo from 'images/works/tldr_logo.webp'
import TLDRPhoto from 'images/tldr.webp'
import ZaraImage from 'images/works/zara.webp'

export interface Project {
  name: string
  description: string
  heroImage: string
  roles: string[]
  link: {
    text: 'READ CASE STUDY' | 'VIEW PRESENTATION' | 'VISIT WEBSITE' | 'VIEW FIGMA' | 'VIEW DESIGNS'
    url: string
  }
  logo?: {
    image: string
    color: string
  }
}

export const Projects: Record<string, Project> = {
  GainTain: {
    name: 'GainTain',
    description: 'Designed the user interface and interactions for GainTain, a mobile application focusing on tracking workouts and solving the challenge of logging weight lifting between sets. Currently developing this project with my partner to enhance the user experience in fitness tracking. This ongoing project aims to provide a seamless and efficient solution for fitness enthusiasts to monitor their progress.',
    heroImage: GainTainPhoto,
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
  JessNRueda: {
    name: 'Jessica Rueda Art',
    roles: ['Website Design', 'Responsive', 'Shopify'],
    description: 'Jessica Rueda required a digital platform for her art. I developed a Shopify website with e-commerce functionality, secure payments, SEO optimization, and mobile responsiveness. This increased her online visibility and sales.',
    heroImage: JessRuedaImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://jessnrueda.com/'
    },
    logo: {
      image: JessRuedaLogo,
      color: '#FEEEFF'
    }
  },
  Phronesis: {
    name: 'Phronesis',
    description: 'I created visual UI designs in Figma for an educational startup. The project included branding elements such as a logo, color pallets, components, dark and light mode designs, and a simple information architecture. This practice project highlighted my interest in educational startups and my skills in visual design.',
    heroImage: PhronesisPhoto,
    roles: [
      'Brand Identity',
      'Visual Design',
      'Figma',
      'B2B',
      'Saas'
    ],
    link: {
      text: 'READ CASE STUDY',
      url: '/case_studies/phronesis'
    },
    logo: {
      image: PhronesisLogo,
      color: '#212224'
    }
  },
  QuerQueCandles: {
    name: 'QuerQue Candles',
    roles: ['Brand Identity', 'Graphic Design'],
    description: 'Querque Candles needed an online presence. I chose Shopify, designed a brand identity, created a logo, and built a user-friendly website. Despite non-payment for the website, the branding successfully enhanced their market visibility.',
    heroImage: QuerqueImage,
    link: {
      text: 'VIEW FIGMA',
      url: 'https://www.figma.com/file/3yeMcqsp6NQ5bf7EnJVrCH/QuerQue-Candles?type=design&node-id=0-1'
    },
    logo: {
      image: QuerqueLogo,
      color: '#FFF5E8'
    }
  },
  TLDR: {
    name: 'TL;DR',
    description: 'Participated in a one-day hackathon focused on using AI to summarize legal language in End User Terms Agreements. As a product design project, our team created an MVP to quickly inform users about what they are signing away. This project involved intensive collaboration and rapid prototyping, culminating in a Google Presentation showcasing our solution.',
    heroImage: TLDRPhoto,
    roles: [
      '1 day Hackathon',
      'Product Design',
      'Prototyping'
    ],
    link: {
      text: 'VIEW PRESENTATION',
      url: 'https://docs.google.com/presentation/d/1qXeKJTsfPWMx_gYd4cbBtRxIbwm7jJqWRpy747TrlWM'
    },
    logo: {
      image: TLDRLogo,
      color: '#59145F'
    }
  },
  AirbrushArtStudio: {
    name: 'Airbrush Art Studio',
    roles: ['Website Design', 'Responsive', 'Editor X'],
    description: "Utilized Wix to design the digital presence for Airbrush Art Studio, emphasizing effective Information Architecture. Delivered copywriting and SEO services to boost online visibility and client engagement. This budget-friendly project focused on showcasing the studio's portfolio without extensive branding.",
    heroImage: AirbrushImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://www.airbrushart.studio/'
    },
    logo: {
      image: AirbrushLogo,
      color: '#181818'
    }
  },
  ZarasCleaning: {
    name: "Zara's Cleaning",
    roles: ['Website Design', 'Responsive', 'Editor X'],
    description: 'Developed a user-friendly website for Zaras Cleaning using Wix, concentrating on clear and efficient information architecture. Provided comprehensive copywriting and SEO services to enhance search engine performance and attract new clients. The project aimed to present essential information within a limited budget framework.',
    heroImage: ZaraImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://www.zarascleaning.com/'
    }
  },
  SunbeltProperties: {
    name: 'Sunbelt Properties',
    roles: ['Website Design', 'Responsive', 'Wix'],
    description: 'Crafted the online presence for Sunbelt Properties with Wix, designing an intuitive Information Architecture for a seamless user experience. Offered targeted copywriting and SEO services to increase the visibility of property listings and drive user inquiries. This low-budget initiative prioritized functionality and accessibility over extensive branding.',
    heroImage: SunbeltImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://www.sunbeltpropertiesnm.com/'
    }
  },
  LoboGardens: {
    name: 'Lobo Gardens',
    roles: ['Volunteer', 'Business Cards', 'Event Flyers', 'Branding'],
    description: 'As part of a community project, I contributed to the branding and promotional design for Lobo Gardens, an urban gardening initiative. This involved creating a logo, designing educational materials, and developing a website to increase community engagement and support for campus gardening activities.',
    heroImage: LoboGardensImage,
    link: {
      text: 'VISIT WEBSITE',
      url: 'https://dribbble.com/shots/16868644-Flyer-Designs-Business-Card-and-Brochure-Lobo-Gardens'
    },
    logo: {
      image: LoboGardensLogo,
      color: '#010101'
    }
  }
}

export default Projects
