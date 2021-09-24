import React, { useEffect, useState } from 'react'

import useAnimateOnScroll from '../../../hooks/use_animate_on_scroll'

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

  const updateComponent = indexToDisplay => {
    const newMarginTop = [...marginTop]
    for (let i = 0; i < indexToDisplay; i++)
      newMarginTop[i] = '-100vh'
    for (let i = indexToDisplay + 1; i < components.length; i++)
      newMarginTop[i] = '100vh'
    newMarginTop[indexToDisplay] = 0
    setMarginTop(newMarginTop)
  }

  useEffect(() => {
    const updateScroll = event => {
      console.log(displayedComponentIndex)
      event.preventDefault()
      const direction = event.deltaY > 0 ? 1 : -1
      setDisplayedComponentIndex(componentIndex => {
        const newComponentIndex = componentIndex + direction
        if (newComponentIndex < 0 || newComponentIndex >= components.length) return componentIndex

        return newComponentIndex
      })
    }
    window.addEventListener('wheel', updateScroll)
    return () => window.removeEventListener('wheel', updateScroll)
  }, [])

  useEffect(() => {
    updateComponent(displayedComponentIndex)
  }, [displayedComponentIndex])

  return (
    <>
      <Header />
      {civica()}
      {meowWolf()}
      {helios()}
      <SideNavigation links={navigationLinks} click={setDisplayedComponentIndex}/>
    </>
  )
}

export default AppsPage
