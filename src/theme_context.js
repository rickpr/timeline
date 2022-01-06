import React from 'react'

const Themes = {
  Helios: {
    primary: '#FFFFFF',
    stroke: '#00B9FD',
    background: 'linear-gradient(to right, #00B8FD, #2AF598)',
    fill: '#FFFFFF',

    // Circles on timeline for projects
    projectCircleFill: 'linear-gradient(to right, #00B8FD, #2AF598)',

    // Down Arrow
    arrowTop: '#00B8FD',
    arrowBottom: '#2AF598',
    circleColor: '#FFFFFF',

    // Text gradients
    textGradientTop: '#EC6EAD',
    textGradientBottom: '#3494E6',

    footer: '#00B9FD',
  },
  'Meow Wolf': {
    primary: '#FF2079',
    stroke: '#3DA834',
    background: '#000000',
    fill: '#FFFFFF',

    // Circles on timeline for projects
    projectCircleFill: '#FFFFFF',
    projectCircleStroke: '#3DA834',

    // Down Arrow
    arrowTop: '#DA1C5C',
    arrowBottom: '#DA1C5C',
    circleColor: '#39FF14',

    footer: '#FF2079',
  },
  'Civic App': {
    primary: '#39FF14',
    stroke: '#39FF14',
    background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)',
    fill: '#FFFFFF',

    // Circles on timeline for projects
    projectCircleFill: '#39FF14',

    // Down Arrow
    arrowTop: '#39FF14',
    arrowBottom: '#39FF14',
    circleColor: '#39FF14',

    footer: '#39FF14'
  }
}

const ThemeContext = React.createContext(Themes['Meow Wolf'])
export { ThemeContext, Themes }
