import type { CSSProperties } from 'react'

export interface Colors {
  background: CSSProperties['color']
  text: CSSProperties['color']
}

export interface Theme {
  colors?: {
    darkMode?: Colors
    lightMode?: Colors
  }
}

export const darkTextColor = '#3E4242'
export const lightTextColor = '#F5F5F5'
export const darkBackgroundColor = '#090B0B'
export const lightBackgroundColor = '#F5F5F5'

const backgroundGradient = (color: string, darkMode: boolean): string => {
  const gradientColor = darkMode ? darkBackgroundColor : lightBackgroundColor
  return `linear-gradient(248deg, ${gradientColor} 13.28%, ${color} 58.07%, ${gradientColor} 90.12%)`
}

export const darkBackgroundGradient = (color: string): string => {
  return backgroundGradient(color, true)
}

export const lightBackgroundGradient = (color: string): string => {
  return backgroundGradient(color, false)
}

export const Themes = {
  About: {
    colors: {
      darkMode: {
        background: '#8D5D24',
        text: lightTextColor
      },
      lightMode: {
        background: '#D2C0A4',
        text: darkTextColor
      }
    }
  },
  Portfolio: {
    colors: {
      darkMode: {
        background: '#24878D',
        text: lightTextColor
      },
      lightMode: {
        background: '#A4D2D0',
        text: darkTextColor
      }
    }
  },
  Services: {
    colors: {
      darkMode: {
        background: '#245B8D',
        text: lightTextColor
      },
      lightMode: {
        background: '#A4C1D2',
        text: darkTextColor
      }
    }
  }
}
