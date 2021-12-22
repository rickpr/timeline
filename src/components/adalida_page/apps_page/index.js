import React, { useEffect, useRef, useState } from 'react'
import { minBy } from 'lodash'

import Header from './header'
import SideNavigation from './side_navigation'
import Project from '../project'

import civicaPhone from 'images/civica.png'
import meowWolfHome from 'images/meow_wolf.png'
import heliosPhone from 'images/helios.png'

const AppsPage = () => {
  const helios = (
    <Project
      key='helios'
      forwardRef={useRef()}
      title='Helios'
      description='A digital banking user experience for an account sign up.'
      heroPhoto={heliosPhone}
      primaryColor='#FFFFFF'
      accentColor='#FFFFFF'
      customStyle={{ background: 'linear-gradient(to right, #00B8FD, #2AF598)' }}
      top
    />
  )

  const meowWolf = (
    <Project
      key='meow-wolf'
      forwardRef={useRef()}
      title='Meow Wolf'
      description='A mobile ticketing experience for a non-linear interactive art museum.'
      heroPhoto={meowWolfHome}
      primaryColor='#FFFFFF'
      accentColor='#FF2079'
      customStyle={{ background: '#000000' }}
    />
  )

  const civica = (
    <Project
      key='civica'
      forwardRef={useRef()}
      title='Civica'
      description='A mobile social experience where users scan politicians and learn about their donors.'
      heroPhoto={civicaPhone}
      primaryColor='#FFFFFF'
      accentColor='#39FF14'
      customStyle={{ background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)' }}
    />
  )

  const navigationLinks = {
    Helios: {
      color: helios.props.accentColor,
      ref: helios.props.forwardRef,
      background: 'linear-gradient(to right, #00B8FD, #2AF598)'
    },
    'Meow Wolf': {
      color: meowWolf.props.accentColor,
      ref: meowWolf.props.forwardRef,
      background: '#000000'
    },
    'Civic App': {
      color: civica.props.accentColor,
      ref: civica.props.forwardRef,
      background: 'linear-gradient(to bottom left, #4A00E0, #8D2CE2)'
    }
  }

  const projects = [helios, meowWolf, civica]
  const [currentProject, setCurrentProject] = useState(helios)
  const scrollRef = useRef()
  useEffect(() => {
    const updateCurrentProject = () => {
      const distanceFromWindow = project => Math.abs(project.props.forwardRef.current.getBoundingClientRect().top)
      const closestProject = minBy(projects, distanceFromWindow)
      setCurrentProject(closestProject)
    }
    scrollRef.current.addEventListener('scroll', updateCurrentProject)
    return () => window.removeEventListener('scroll', updateCurrentProject)
  }, [])

  return (
    <>
      <Header color={currentProject.props.accentColor} />
      <div style={{ scrollSnapType: 'y mandatory', overflow: 'auto', height: '100vh' }} ref={scrollRef}>
        {projects}
      </div>
      <SideNavigation links={navigationLinks} activeIndex={projects.findIndex(project => project.props.forwardRef === currentProject.props.forwardRef)} />
    </>
  )
}

export default AppsPage
