import React, { type CSSProperties } from 'react'

import Favicon from 'images/favicon.png'

export interface Theme {
  name: string
  subtitle?: string
  description: string
  coverPhoto: string
  heroPhoto?: string
  roles: string[]
  lightModeBackground?: CSSProperties['background']
  darkModeBackground?: CSSProperties['background']
  link?: {
    text: string
    url: string
  }
  usesDarkMode?: boolean
}

export const AboutTheme: Theme = {
  name: 'About Adalida',
  description: '',
  coverPhoto: Favicon,
  heroPhoto: Favicon,
  roles: [],
  lightModeBackground: 'linear-gradient(117deg, #D2D6D9 -8.17%, rgba(210, 164, 208, 0.99) 46.24%, #D5D5D5 98.47%), linear-gradient(248deg, #464046 13.28%, #8D2470 58.07%, #464040 90.12%)',
  darkModeBackground: 'linear-gradient(248deg, #464046 13.28%, #8D2470 58.07%, #464040 90.12%)'
}

const ThemeContext = React.createContext({
  darkMode: true,
  toggleDarkMode: (): void => { /* Do nothing */ },
  ...AboutTheme
})
export { ThemeContext }
