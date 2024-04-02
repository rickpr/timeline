import { AboutTheme, darkTextColor, lightTextColor, type Theme } from './theme_context'

interface FacetTheme extends Omit<Theme, 'subtitle'> {
  subtitle: string
}

const FacetThemes: Record<string, FacetTheme> = {
  Portfolio: {
    name: 'Portfolio',
    subtitle: "I'm a Product Designer",
    description: 'Check out my portfolio where I design aesthetically pleasing and functional solutions.',
    roles: [
      'Figma',
      'User Research',
      'UX Design',
      'Animation'
    ],
    colors: {
      darkMode: {
        background: '#24878D',
        text: lightTextColor
      },
      lightMode: {
        background: '#A4D2D0',
        text: darkTextColor
      }
    },
    link: {
      text: 'View portfolio',
      url: '/portfolio'
    }
  },
  Services: {
    name: 'Services',
    subtitle: "I'm a Freelance Designer",
    description: 'Specializing in empowering small businesses by crafting websites that not only showcase their company, but also drive engagement and sales.',
    roles: [
      'Web Design',
      'Brand Identity',
      'Product Design'
    ],
    colors: {
      darkMode: {
        background: '#245B8D',
        text: lightTextColor
      },
      lightMode: {
        background: '#A4C1D2',
        text: darkTextColor
      }
    },
    link: {
      text: 'View services',
      url: '/services'
    }
  },
  About: AboutTheme as FacetTheme
}

export default FacetThemes
