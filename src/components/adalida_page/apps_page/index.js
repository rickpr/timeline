import React, { useEffect, useState } from 'react'

import useAnimateOnScroll from '../../../hooks/use_animate_on_scroll'
import useDebounce from '../../../hooks/use_debounce'

import Header from '../header'
import SideNavigation from './side_navigation'
import Project from './project'

const AppsPage = () => {
  useAnimateOnScroll()
  const [marginTop, setMarginTop] = useState(['0', '100vh', '100vh'])

  const civica = () =>
    <Project
      title="Civica"
      description="A mobile social experience where users scan politicians and learn about their donors."
      primaryColor="#FFFFFF"
      accentColor="#39FF14"
      marginTop={marginTop[0]}
    />

  const meowWolf = () =>
    <Project
      title="Meow Wolf"
      description="A mobile ticketing experience for a non-linear interactive art museum."
      primaryColor="#FFFFFF"
      accentColor="#FF2079"
      marginTop={marginTop[1]}
    />

  const helios = () =>
    <Project
      title="Helios"
      description="A digital banking user experience for an account sign up."
      primaryColor="#000000"
      accentColor="#17A1FA"
      marginTop={marginTop[2]}
    />

  const navigationLinks = {
    'Civic App': { color: '#0000FF', component: () => civica },
    'Meow Wolf': { color: '#00FF00', component: () => meowWolf },
    Helios: { color: '#FF0000', component: () => helios },
  }

  const components = [civica, meowWolf, helios]
  const [displayedComponentIndex, setDisplayedComponentIndex] = useState(() => 0)
  const debounce = useDebounce()

  const scrollUp = debounce(() =>
    setDisplayedComponentIndex(componentIndex => Math.max(0, componentIndex - 1))
  )

  const scrollDown = debounce(() =>
    setDisplayedComponentIndex(componentIndex => Math.min(components.length - 1, componentIndex + 1))
  )

  const handleScroll = event => {
    event.preventDefault()
    event.deltaY > 0 ? scrollDown() : scrollUp()
  }

  const handleKeyPress = event => {
    event.preventDefault()
    if ([33, 38].includes(event.keyCode)) return scrollUp()
    if ([34, 40].includes(event.keyCode)) return scrollDown()
  }

  const scrollComponentIntoView = indexOfComponent => {
    const newMarginTop = [...marginTop]
    for (let i = 0; i < indexOfComponent; i++) newMarginTop[i] = '-100vh'
    for (let i = indexOfComponent + 1; i < components.length; i++) newMarginTop[i] = '100vh'
    newMarginTop[indexOfComponent] = 0
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

  useEffect(() => { scrollComponentIntoView(displayedComponentIndex) }, [displayedComponentIndex])

  return (
    <>
      <Header />
      {civica()}
      {meowWolf()}
      {helios()}
      <SideNavigation links={navigationLinks} click={debounce(setDisplayedComponentIndex)}/>
    </>
  )
}

export default AppsPage
