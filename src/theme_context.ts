import React from 'react'

import Projects, { type Project } from './project_data'

import Favicon from 'images/favicon.png'

export const AboutTheme: Project = {
  name: 'About Adalida',
  description: '',
  coverPhoto: Favicon,
  heroPhoto: Favicon,
  projectPage: '/about',
  roles: [],
  background: '#FE347E'
}

const ThemeContext = React.createContext({
  darkMode: true,
  toggleDarkMode: (): void => { /* Do nothing */ },
  ...AboutTheme
})
export { Projects, ThemeContext }
