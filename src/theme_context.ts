import React, { type CSSProperties } from 'react'

import WhoPhoto from 'images/facets/who.webp'

export interface Colors {
  background: CSSProperties['color']
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
  name: 'About',
  subtitle: "I'm a Burqueña",
  description: 'I grew up one block from the famous Los Pollos Hermanos in the show Breaking Bad. Now, I’m transplanted in San Francisco. Read more about me and my professional background here.',
  coverPhoto: WhoPhoto,
  roles: [
    'UNM',
    'Interdisciplinary BA',
    'English-Philosophy'
  ],
  colors: {
    darkMode: {
      background: '#8D5D24',
      text: lightColor
    },
    lightMode: {
      background: '#D2C0A4',
      text: lightColor
    }
  },
  link: {
    url: '/about',
    text: 'View About'
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
