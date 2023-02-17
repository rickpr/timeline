import React from 'react'

import GainTainPhoto from 'images/gaintain/cover.jpg'
import ZarasCleaningPhoto from 'images/zaras_cleaning/cover.jpg'
import HBOMaxPhoto from 'images/hbo_max/cover.png'
import ZenoPhoto from 'images/zeno/cover.png'
import LogiPhoto from 'images/logi/title.png'
import CyphPhoto from 'images/cyph/title.png'
import HireAdiPhoto from 'images/adalida_face.jpg'

const Themes = {
  GainTain: {
    name: 'GainTain',
    description: 'Designed specifically for fitness enthusiasts who want to track their workout data extensively.',
    projectPage: '/adalida/projects/gaintain',
    coverPhoto: GainTainPhoto,
    heroPhotoPath: 'images/gaintain/title.png',

    // Colors
    primary: '#F8473D',
    background: 'linear-gradient(#F8473D, #E83161)',
    border: '#E83161'
  },
  ZarasCleaning: {
    name: "Zara's Cleaning",
    description: 'Albuquerque Professional Cleaners',
    projectPage: '/adalida/projects/zaras_cleaning',
    coverPhoto: ZarasCleaningPhoto,
    heroPhotoPath: 'images/zaras_cleaning/title.png',

    // Colors
    primary: '#3A977A',
    background: 'linear-gradient(to bottom right, #3A977A, #9EE7D3)',
    border: '#9EE7D3'
  },
  Zeno: {
    name: 'Zeno',
    description: 'Fashion E-commerce Design',
    projectPage: '/adalida/projects/zeno',
    coverPhoto: ZenoPhoto,
    heroPhotoPath: 'images/zeno/title.png',

    // Colors
    primary: '#ED6112',
    background: 'linear-gradient(to right, #ED6112, #F68733)',
    border: '#F68733'
  },
  HBOMax: {
    name: 'HBOMax',
    description: 'Streaming fit for you.',
    projectPage: '/adalida/projects/hbo_max',
    coverPhoto: HBOMaxPhoto,
    heroPhotoPath: 'images/hbo_max/about.png',

    // Colors
    primary: '#DB00FF',
    background: 'linear-gradient(to bottom right, #05000F, #44156D)',
    border: '#DB00FF'
  },
  Logi: {
    name: 'Logi',
    description: 'A logistical shipping and tracking experience.',
    projectPage: '/adalida/projects/logi',
    coverPhoto: LogiPhoto,
    heroPhotoPath: 'images/logi/title.png',

    // Colors
    primary: '#3357D2',
    background: '#3357D2',
    border: '#5FCCF0'
  },
  Cyph: {
    name: 'Cyph',
    description: "Learn about politicians' donors and history.",
    projectPage: '/adalida/projects/cyph',
    coverPhoto: CyphPhoto,
    heroPhotoPath: 'images/cyph/title.png',

    // Colors
    primary: '#39FF14',
    background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)',
    border: '#39FF14'
  },
  // TODO: Remove this and make it independent instead
  'Hire Adi': {
    name: 'Hire Adi',
    description: '',
    coverPhoto: HireAdiPhoto,
    heroPhotoPath: 'images/adalida_face.jpg',
    projectPage: '/adalida/about',

    // Colors
    primary: '#850021',
    background: '#000000',
    border: '#850021'
  }

}

const ThemeContext = React.createContext(Themes['Hire Adi'])
export { ThemeContext, Themes }
