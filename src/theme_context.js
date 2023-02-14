import React from 'react'

import GainTainPhoto from 'images/gaintain/title.jpg'
import ZarasCleaningPhoto from 'images/zaras_cleaning/title.jpg'
import HBOMaxPhoto from 'images/hbo_max/title.jpg'
import ZenoPhoto from 'images/zeno/title.jpg'
import HireAdiPhoto from 'images/adalida_face.jpg'

const Themes = {
  GainTain: {
    name: 'GainTain',
    description: 'Designed specifically for fitness enthusiasts who want to track their workout data extensively.',
    projectPage: '/adalida/projects/gaintain',
    heroPhoto: GainTainPhoto,
    heroPhotoPath: 'images/gaintain/title.jpg',

    // Colors
    primary: '#F8473D',
    background: 'linear-gradient(#F8473D, #E83161)',
    border: '#E83161'
  },
  ZarasCleaning: {
    name: "Zara's Cleaning",
    description: 'Albuquerque Professional Cleaners',
    projectPage: '/adalida/projects/zaras_cleaning',
    heroPhoto: ZarasCleaningPhoto,
    heroPhotoPath: 'images/zaras_cleaning/title.jpg',

    // Colors
    primary: '#3A977A',
    background: 'linear-gradient(to bottom right, #3A977A, #9EE7D3)',
    border: '#9EE7D3'
  },
  Zeno: {
    name: 'Zeno',
    description: 'Fashion E-commerce Design',
    projectPage: '/adalida/projects/zeno',
    heroPhoto: ZenoPhoto,
    heroPhotoPath: 'images/zeno/title.jpg',

    // Colors
    primary: '#FCBC31',
    background: 'linear-gradient(to right, #FCBC31, #F68733)',
    border: '#F68733'
  },
  HBOMax: {
    name: 'HBOMax',
    description: 'Streaming fit for you.',
    projectPage: '/adalida/projects/hbo_max',
    heroPhoto: HBOMaxPhoto,
    heroPhotoPath: 'images/hbo_max/title.jpg',

    // Colors
    primary: '#DB00FF',
    background: 'linear-gradient(to bottom right, #05000F, #44156D)',
    border: '#DB00FF'
  },
  // TODO: Remove this and make it independent instead
  'Hire Adi': {
    name: 'Hire Adi',
    description: '',
    heroPhoto: HireAdiPhoto,
    heroPhotoPath: 'images/adalida_face.jpg',
    projectPage: '/adalida/about',

    // Colors
    primary: '#3D9AF0',
    background: '#000000',
    border: '#3D9AF0'
  }
}

const ThemeContext = React.createContext(Themes['Hire Adi'])
export { ThemeContext, Themes }
