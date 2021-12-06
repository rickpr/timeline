import React, { useState } from 'react'

import useDebounce from '../../../hooks/use_debounce'
import useAlternateScroll from '../../../hooks/use_alternate_scroll'

import Album from '../album'
import Header from './header'
import SideNavigation from './side_navigation'
import Project from '../project'

import face from '../face.png'
import meowWolfHome from '../meow_wolf_home.png'
import heliosPhone from './helios.png'

const AppsPage = () => {
  const [displayedProjectIndex, setDisplayedProjectIndex] = useState(0)
  const debounce = useDebounce()

  const helios =
    <Project
      title="Helios"
      description="A digital banking user experience for an account sign up."
      heroPhoto={heliosPhone}
      primaryColor="#FFFFFF"
      accentColor="#FFFFFF"
      customStyle={{ backgroundImage: 'linear-gradient(to right, #00B8FD, #2AF598)' }}
      top
    />

  const meowWolf =
    <Project
      title="Meow Wolf"
      description="A mobile ticketing experience for a non-linear interactive art museum."
      heroPhoto={meowWolfHome}
      primaryColor="#FFFFFF"
      accentColor="#FF2079"
      customStyle={{ background: '#000000' }}
    />

  const civica =
    <Project
      title="Civica"
      description="A mobile social experience where users scan politicians and learn about their donors."
      heroPhoto={face}
      primaryColor="#FFFFFF"
      accentColor="#39FF14"
      customStyle={{ backgroundImage: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)' }}
    />

  const navigationLinks = {
    Helios: { color: helios.props.accentColor },
    'Meow Wolf': { color: meowWolf.props.accentColor },
    'Civic App': { color: civica.props.accentColor }
  }

  const projects = [helios, meowWolf, civica]
  const scrollDown = debounce(() => setDisplayedProjectIndex(projectIndex => Math.min(projects.length - 1, projectIndex + 1)))
  const scrollUp = debounce(() => setDisplayedProjectIndex(projectIndex => Math.max(0, projectIndex - 1)))
  useAlternateScroll({ scrollDown, scrollUp })

  return (
    <>
      <Header color={projects[displayedProjectIndex].props.accentColor} />
      <Album displayedPageIndex={displayedProjectIndex}>{projects}</Album>
      <SideNavigation links={navigationLinks} click={useDebounce()(setDisplayedProjectIndex)} activeIndex={displayedProjectIndex} />
    </>
  )
}

export default AppsPage
