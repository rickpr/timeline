import React, { useEffect, useRef, useState } from 'react'
import { minBy } from 'lodash'

import Header from './header'
import SideNavigation from './side_navigation'
import App from '../app'

import cyphPhone from 'images/cyph.png'
import meowWolfHome from 'images/meow_wolf.png'
import heliosPhone from 'images/helios.png'

const AppsPage = () => {
  const navigationLinks = {
    Helios: {
      color: '#FFFFFF',
      ref: useRef(),
      background: 'linear-gradient(to right, #00B8FD, #2AF598)'
    },
    'Meow Wolf': {
      color: '#FF2079',
      ref: useRef(),
      background: '#000000'
    },
    Cyph: {
      color: '#39FF14',
      ref: useRef(),
      background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)'
    }
  }
  const [closestProject, setClosestProject] = useState('Helios')

  const helios = (
    <App
      key='helios'
      active={closestProject === 'Helios'}
      forwardRef={navigationLinks.Helios.ref}
      title='Helios'
      description='A digital banking user experience for an account sign up.'
      heroPhoto={heliosPhone}
      primaryColor='#FFFFFF'
      accentColor={navigationLinks[closestProject].color}
      projectPage='/adalida/projects/helios'
      top
    />
  )

  const meowWolf = (
    <App
      key='meow-wolf'
      active={closestProject === 'Meow Wolf'}
      forwardRef={navigationLinks['Meow Wolf'].ref}
      title='Meow Wolf'
      description='A mobile ticketing experience for a non-linear interactive art museum.'
      heroPhoto={meowWolfHome}
      primaryColor='#FFFFFF'
      accentColor={navigationLinks[closestProject].color}
      projectPage='/adalida/projects/meow_wolf'
    />
  )

  const cyph = (
    <App
      key='cyph'
      active={closestProject === 'Cyph'}
      forwardRef={navigationLinks.Cyph.ref}
      title='Cyph'
      description='A mobile social experience where users scan politicians and learn about their donors.'
      heroPhoto={cyphPhone}
      primaryColor='#FFFFFF'
      accentColor={navigationLinks[closestProject].color}
      projectPage='/adalida/projects/cyph'
    />
  )

  const projects = [helios, meowWolf, cyph]
  const scrollRef = useRef()
  useEffect(() => {
    const updateClosestProject = () => {
      const distanceFromWindow = ([_, project]) => Math.abs(project.ref.current.getBoundingClientRect().top)
      const closestProject = minBy(Object.entries(navigationLinks), distanceFromWindow)[0]
      setClosestProject(closestProject)
    }
    scrollRef.current.addEventListener('scroll', updateClosestProject)
    updateClosestProject()
    return () => window.removeEventListener('scroll', updateClosestProject)
  }, [])

  return (
    <>
      <Header color={navigationLinks[closestProject].color} />
      <div style={{ scrollSnapType: 'y mandatory', overflow: 'auto', height: '100vh' }} ref={scrollRef}>
        {projects}
      </div>
      <SideNavigation links={navigationLinks} activeProject={closestProject} />
    </>
  )
}

export default AppsPage
