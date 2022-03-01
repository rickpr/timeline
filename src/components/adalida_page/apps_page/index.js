import React, { useEffect, useRef, useState } from 'react'
import { minBy } from 'lodash'

import { ThemeContext, Themes } from 'theme_context'

import App from '../app'
import Layout from '../layout'
import SideNavigation from './side_navigation'

const AppsPage = () => {
  const navigationLinks = {
    Helios: useRef(),
    'Meow Wolf': useRef(),
    Cyph: useRef()
  }
  const [closestProject, setClosestProject] = useState('Helios')

  const helios = (
    <App
      key='helios'
      forwardRef={navigationLinks.Helios}
      title='Helios'
    />
  )

  const meowWolf = (
    <App
      key='meow-wolf'
      forwardRef={navigationLinks['Meow Wolf']}
      title='Meow Wolf'
    />
  )

  const cyph = (
    <App
      key='cyph'
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
      <Layout>
        <div style={{ scrollSnapType: 'y mandatory', overflow: 'auto', height: '100vh' }} ref={scrollRef}>
          {projects}
        </div>
        <SideNavigation links={navigationLinks} />
      </Layout>
    </ThemeContext.Provider>
  )
}

export default AppsPage
