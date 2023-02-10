import React from 'react'

import GainTainPhoto from 'images/gaintain/title.jpg'
import ZarasCleaningPhoto from 'images/zaras_cleaning/title.jpg'
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
    background: '#3357D2',
    border: '#E83161'
  },
  ZarasCleaning: {
    name: "Zara's Cleaning",
    description: 'Streaming fit for you.',
    projectPage: '/adalida/projects/zaras_cleaning',
    heroPhoto: ZarasCleaningPhoto,
    heroPhotoPath: 'images/zaras_cleaning/title.jpg',

    // Colors
    primary: '#DB00FF',
    background: 'linear-gradient(to bottom right, #05000F, #44156D)',
    border: '#DB00FF'
  },
  Zeno: {
    name: 'Zeno',
    description: 'A luxury e-commerce experience.',
    projectPage: '/adalida/projects/zeno',
    heroPhoto: ZenoPhoto,
    heroPhotoPath: 'images/zeno/title.jpg',

    // Colors
    primary: '#ED6112',
    background: '#ED6112',
    border: '#FFFFFF'
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
