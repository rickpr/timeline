import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext, Themes } from 'theme_context'

import NavigationLink from './navigation_link'

const Mobile = ({ links }) => {
  const { name } = useContext(ThemeContext)
  const widthOnScreen = 80 // vw
  // This makes three projects fit due to the gap
  const widthPerProject = widthOnScreen / 5 // vw
  // The gap between each project is the size of the project.
  const offsetPerProject = widthPerProject * 2 // vw

  const projectCount = Object.keys(links).length
  // One per project, and one per gap. There are one fewer gaps than projects.
  const totalColumns = 2 * projectCount - 1 // vw
  const totalWidth = widthPerProject * totalColumns // vw

  const outerStyles = {
    pointerEvents: 'none',
    position: 'fixed',
    borderBottom: '0.5vh solid #FFFFFF',
    bottom: '10vh',
    height: '50vh',
    width: `${widthOnScreen}vw`,
    left: `${(100 - widthOnScreen) / 2}vw`
  }

  const computeOffset = () => {
    const indexOfActiveProject = Object.keys(links).indexOf(name)
    // Offset to the left when the index is zero.
    return (1 - indexOfActiveProject) * offsetPerProject
  }

  const innerStyles = {
    display: 'grid',
    gridTemplateColumns: Array(totalColumns).fill(`${widthPerProject}vw`).join(' '),
    gridTemplateRows: '1fr',
    alignContent: 'center',
    position: 'absolute',
    height: '100%',
    width: `${totalWidth}vw`,
    left: `${computeOffset()}vw`,
    transitionProperty: 'all',
    transitionDuration: '200ms',
    transitionTimingFunction: 'ease-in-out'
  }

  const navigationLinks = []
  Object.entries(links).forEach(
    ([title, ref], index) => {
      const { primary } = Themes[title]
      const number = String(index + 1).padStart(2, 0)
      navigationLinks.push(
        <NavigationLink
          key={`navigation-link-${number}`}
          number={number}
          click={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
          title={title}
          color={primary}
        />
      )
      if (index < projectCount - 1) navigationLinks.push(<div key={`navigation-gap-${number}`} />)
    }
  )
  return (
    <div style={outerStyles}>
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <div style={innerStyles}>{navigationLinks}</div>
      </div>
    </div>
  )
}

Mobile.propTypes = {
  links: PropTypes.shape({
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    ref: PropTypes.shape({ current: PropTypes.node }).isRequired
  })
}

export default Mobile
