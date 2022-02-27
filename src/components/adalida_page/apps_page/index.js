import React, { useEffect, useRef, useState } from 'react'
import { minBy } from 'lodash'

import { ThemeContext, Themes } from 'theme_context'

import Header from '../header'
import SideNavigation from './side_navigation'
import App from '../app'

const AppsPage = () => {
  const navigationLinks = {
    Helios: useRef(),
    'Meow Wolf': useRef(),
    Cyph: useRef()
  }
  const [closestProject, setClosestProject] = useState('Helios')
  const linkDescription = 'OPEN CASE STUDY'

  const helios = (
    <App
      key='helios'
      linkDescription={linkDescription}
      forwardRef={navigationLinks.Helios}
      title='Helios'
      top
    />
  )

  const meowWolf = (
    <App
      key='meow-wolf'
      linkDescription={linkDescription}
      forwardRef={navigationLinks['Meow Wolf']}
      title='Meow Wolf'
    />
  )

  const cyph = (
    <App
      key='cyph'
      linkDescription={linkDescription}
      forwardRef={navigationLinks.Cyph}
      title='Cyph'
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
      <div style={{ scrollSnapType: 'y mandatory', overflow: 'auto', height: '100vh' }} ref={scrollRef}>
        {projects}
      </div>
      <SideNavigation links={navigationLinks} />
    </ThemeContext.Provider>
  )
}

export default AppsPage
