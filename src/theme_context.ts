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
export const darkGradientColor = '#464046'
export const lightGradientColor = '#D2D6D9'

const backgroundGradient = (color: string, darkMode: boolean): string => {
  const gradientColor = darkMode ? darkGradientColor : lightGradientColor
  return `linear-gradient(248deg, ${gradientColor} 13.28%, ${color} 58.07%, ${gradientColor} 90.12%)`
}

export const darkBackgroundGradient = (color: string): string => {
  return backgroundGradient(color, true)
}

export const lightBackgroundGradient = (color: string): string => {
  return backgroundGradient(color, false)
}

export const AboutTheme: Theme = {
  name: 'About Adalida',
  description: '',
  coverPhoto: Favicon,
  heroPhoto: Favicon,
  roles: [],
  colors: {
    lightMode: {
      background: '#D2A4D0',
      text: lightColor
    },
    darkMode: {
      background: '#8D2470',
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
