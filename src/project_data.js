import GainTainPhoto from 'images/gaintain/cover.png'
import ZarasCleaningPhoto from 'images/zaras_cleaning/cover.jpg'
import HBOMaxPhoto from 'images/hbo_max/cover.png'
import ZenoPhoto from 'images/zeno/cover.png'
import LogiPhoto from 'images/logi/title.png'

const Projects = {
  GainTain: {
    name: 'GainTain',
    description: 'Designed specifically for fitness enthusiasts who want to track their workout data extensively.',
    projectPage: '/adalida/projects/gaintain',
    coverPhoto: GainTainPhoto,
    heroPhotoPath: 'images/gaintain/title.png',
    roles: [
      'Product Design',
      'User Research'
    ],

    colors: {
      primary: '#F8473D',
      background: 'linear-gradient(#F8473D, #E83161)'
    }
  },
  ZarasCleaning: {
    name: "Zara's Cleaning",
    description: 'Albuquerque Professional Cleaners',
    projectPage: '/adalida/projects/zaras_cleaning',
    coverPhoto: ZarasCleaningPhoto,
    heroPhotoPath: 'images/zaras_cleaning/title.png',
    roles: [
      'User Interface',
      'Design Systems'
    ],

    colors: {
      primary: '#3A977A',
      background: 'linear-gradient(to bottom right, #3A977A, #9EE7D3)'
    }
  },
  Zeno: {
    name: 'Zeno',
    description: 'Fashion E-commerce Design',
    projectPage: '/adalida/projects/zeno',
    coverPhoto: ZenoPhoto,
    heroPhotoPath: 'images/zeno/title.png',
    roles: [
      'User Interface',
      'Design Systems'
    ],

    colors: {
      primary: '#ED6112',
      background: 'linear-gradient(to right, #ED6112, #F68733)'
    }
  },
  HBOMax: {
    name: 'HBOMax',
    description: 'Streaming fit for you.',
    projectPage: '/adalida/projects/hbo_max',
    coverPhoto: HBOMaxPhoto,
    heroPhotoPath: 'images/hbo_max/about.png',
    roles: [
      'User Interface',
      'User Interaction'
    ],

    colors: {
      primary: '#DB00FF',
      background: 'linear-gradient(to bottom right, #05000F, #44156D)',
    }
  },
  Logi: {
    name: 'Logi',
    description: 'A logistical shipping and tracking experience.',
    projectPage: '/adalida/projects/logi',
    coverPhoto: LogiPhoto,
    heroPhotoPath: 'images/logi/title.png',
    roles: [
      'Visual Identity',
      'User Interaction'
    ],

    colors: {
      primary: '#3357D2',
      background: '#3357D2'
    }
  }
}

export default Projects
