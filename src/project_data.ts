import type { CSSProperties } from 'react'

import PhronesisPhoto from 'images/phronesis/cover.png'
import GainTainPhoto from 'images/gaintain/cover.png'
import GainTainHeroPhoto from 'images/gaintain/title.png'
import ZenoPhoto from 'images/zeno/cover.png'
import ZenoHeroPhoto from 'images/zeno/title.png'

export interface Project {
  name: string
  description: string
  projectPage: string
  coverPhoto: string
  heroPhoto: string
  roles: string[]
  background: CSSProperties['background']
}

export const Projects: Record<string, Project> = {
  Phronesis: {
    name: 'Phronesis',
    description: 'We enable users with the power to visual and understand your data in order to grow your business.',
    projectPage: '/adalida/projects/phronesis',
    coverPhoto: PhronesisPhoto,
    heroPhoto: PhronesisPhoto,
    roles: [
      'Visual Identity',
      'User Interaction'
    ],
    background: '#22D91F'
  },

  GainTain: {
    name: 'GainTain',
    description: 'Designed specifically for fitness enthusiasts who want to track their workout data extensively.',
    projectPage: '/adalida/projects/gaintain',
    coverPhoto: GainTainPhoto,
    heroPhoto: GainTainHeroPhoto,
    roles: [
      'Product Design',
      'User Research'
    ],
    background: 'linear-gradient(#FF512F, #DD2476)'
  },

  Zeno: {
    name: 'Zeno',
    description: 'Fashion E-commerce Design',
    projectPage: '/adalida/projects/zeno',
    coverPhoto: ZenoPhoto,
    heroPhoto: ZenoHeroPhoto,
    roles: [
      'User Interface',
      'Design Systems'
    ],
    background: '#ED6112'
  }
}

export default Projects
