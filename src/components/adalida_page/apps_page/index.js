import React, { useEffect, useRef, useState } from 'react'
import { minBy } from 'lodash'

import { ThemeContext, Themes } from 'theme_context'

import Header from './header'
import SideNavigation from './side_navigation'
import App from '../app'

import cyphPhone from 'images/cyph.png'
import meowWolfHome from 'images/meow_wolf.png'
import heliosPhone from 'images/helios.png'

const AppsPage = () => {
  const navigationLinks = {
    Helios: useRef(),
    'Meow Wolf': useRef(),
    Cyph: useRef(),
  }
  const [closestProject, setClosestProject] = useState('Helios')

  const helios = (
    <App
      key='helios'
      forwardRef={navigationLinks.Helios}
      title='Helios'
      heroPhoto={heliosPhone}
      projectPage='/adalida/projects/helios'
      top
    />
  )

  const meowWolf = (
    <App
      key='meow-wolf'
      forwardRef={navigationLinks['Meow Wolf']}
      title='Meow Wolf'
      description='A mobile ticketing experience for a non-linear interactive art museum.'
      heroPhoto={meowWolfHome}
      projectPage='/adalida/projects/meow_wolf'
    />
  )

  const cyph = (
    <App
      key='cyph'
      forwardRef={navigationLinks.Cyph}
      title='Cyph'
      description='A mobile social experience where users scan politicians and learn about their donors.'
      heroPhoto={cyphPhone}
      projectPage='/adalida/projects/cyph'
    />
  )

  const projects = [helios, meowWolf, cyph]
  const scrollRef = useRef()
  useEffect(() => {
    const updateClosestProject = () => {
      const distanceFromWindow = ([_, ref]) => Math.abs(ref.current.getBoundingClientRect().top)
      const closestProject = minBy(Object.entries(navigationLinks), distanceFromWindow)[0]
      setClosestProject(closestProject)
    }
    scrollRef.current.addEventListener('scroll', updateClosestProject)
    updateClosestProject()
    return () => window.removeEventListener('scroll', updateClosestProject)
  }, [])

  return (
    <ThemeContext.Provider value={Themes[closestProject]}>
      <Header />
      <div style={{ scrollSnapType: 'y mandatory', overflow: 'auto', height: '100vh' }} ref={scrollRef}>
        {projects}
      </div>
      <SideNavigation links={navigationLinks} activeProject={closestProject} />
    </ThemeContext.Provider>
  )
}

export default AppsPage
