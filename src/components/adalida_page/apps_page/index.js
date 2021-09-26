import React, { useEffect, useState } from 'react'

import useAnimateOnScroll from '../../../hooks/use_animate_on_scroll'
import useDebounce from '../../../hooks/use_debounce'

import Header from './header'
import SideNavigation from './side_navigation'
import Project from './project'

import face from '../face.png'
import meowWolfHome from '../meow_wolf_home.png'
import heliosPhone from './helios.png'

const AppsPage = () => {
  useAnimateOnScroll()
  console.log(face)
  const [marginTop, setMarginTop] = useState(['0', '100vh', '100vh'])

  const civica =
    <Project
      title="Civica"
      description="A mobile social experience where users scan politicians and learn about their donors."
      heroPhoto={face}
      primaryColor="#FFFFFF"
      accentColor="#39FF14"
      marginTop={marginTop[0]}
      customStyle={{ backgroundImage: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)' }}
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
      marginTop={marginTop[1]}
    />

  const helios =
    <Project
      title="Helios"
      description="A digital banking user experience for an account sign up."
      heroPhoto={heliosPhone}
      primaryColor="#000000"
      accentColor="#FFFFFF"
      marginTop={marginTop[2]}
      customStyle={{ backgroundImage: 'linear-gradient(to right, #00B8FD, #2AF598)' }}
    />

  const navigationLinks = {
    'Civic App': { color: civica.props.accentColor },
    'Meow Wolf': { color: meowWolf.props.accentColor },
    Helios: { color: helios.props.accentColor }
  }

  const projects = [civica, meowWolf, helios]
  const [displayedProjectIndex, setDisplayedProjectIndex] = useState(() => 0)
  const debounce = useDebounce()

  const scrollUp = debounce(() =>
    setDisplayedProjectIndex(projectIndex => Math.max(0, projectIndex - 1))
  )

  const scrollDown = debounce(() =>
    setDisplayedProjectIndex(projectIndex => Math.min(projects.length - 1, projectIndex + 1))
  )

  const handleScroll = event => {
    event.preventDefault()
    event.deltaY > 0 ? scrollDown() : scrollUp()
  }

  // A set might have faster access if we accept more keys.
  // Benchmarking this shows that using an array is faster with two elements.
  const upKeys = [33, 38]
  const downKeys = [34, 40]

  const handleKeyPress = event => {
    if (upKeys.includes(event.keyCode)) {
      event.preventDefault()
      return scrollUp()
    }

    if (downKeys.includes(event.keyCode)) {
      event.preventDefault()
      return scrollDown()
    }
  }

  const scrollProjectIntoView = indexOfProject => {
    const newMarginTop = [...marginTop]
    for (let i = 0; i < indexOfProject; i++) newMarginTop[i] = '-100vh'
    for (let i = indexOfProject + 1; i < projects.length; i++) newMarginTop[i] = '100vh'
    newMarginTop[indexOfProject] = 0
    setMarginTop(newMarginTop)
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll)
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => { scrollProjectIntoView(displayedProjectIndex) }, [displayedProjectIndex])

  return (
    <>
      <Header color={projects[displayedProjectIndex].props.accentColor} />
      {projects}
      <SideNavigation links={navigationLinks} click={debounce(setDisplayedProjectIndex)} activeIndex={displayedProjectIndex} />
    </>
  )
}

export default AppsPage
