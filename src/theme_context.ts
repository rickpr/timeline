import React, { type CSSProperties } from 'react'

import Favicon from 'images/favicon.png'

export interface Colors {
  background: CSSProperties['background']
  text: CSSProperties['color']
}

export interface Theme {
  name: string
  subtitle?: string
  description: string
  coverPhoto: string
  heroPhoto?: string
  roles: string[]
  colors?: {
    darkMode?: Colors
    lightMode?: Colors
  }
  link?: {
    text: string
    url: string
  }
}

export const darkColor = '#121212'
export const lightColor = '#F5F5F5'

export const AboutTheme: Theme = {
  name: 'About Adalida',
  description: '',
  coverPhoto: Favicon,
  heroPhoto: Favicon,
  roles: [],
  colors: {
    lightMode: {
      background: 'linear-gradient(248deg, #D2D6D9 13.28%, rgba(210, 164, 208, 0.99) 58.07%, #D5D5D5 98.47%), linear-gradient(248deg, #464046 13.28%, #8D2470 58.07%, #464040 90.12%)',
      text: lightColor
    },
    darkMode: {
      background: 'linear-gradient(248deg, #464046 13.28%, #8D2470 58.07%, #464040 90.12%)',
      text: lightColor
    }
  }
}

interface ThemeContextType extends Theme {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = React.createContext<ThemeContextType>({
  darkMode: true,
  toggleDarkMode: (): void => { /* Do nothing */ },
  ...AboutTheme
})
export { ThemeContext }
