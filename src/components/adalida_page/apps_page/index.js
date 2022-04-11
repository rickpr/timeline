import React, { useEffect, useRef, useState } from 'react'
import { minBy } from 'lodash'

import { ThemeContext, Themes } from 'theme_context'
import useIsMobile from 'hooks/use_is_mobile'
import useViewportHeight from 'hooks/use_viewport_height'

import App from '../app'
// import HireAdi from '../hire_adi'
import Layout from '../layout'
import SideNavigation from './side_navigation'

const AppsPage = () => {
  const isMobile = useIsMobile()

  const navigationLinks = {
    Cyph: useRef(),
    Zeno: useRef(),
    // 'Hire Adi': useRef()
  }
  const [closestProject, setClosestProject] = useState('Cyph')

  const cyph = (
    <App
      key='cyph'
      ref={navigationLinks.Cyph}
      title='Cyph'
    />
  )

  const zeno = (
    <App
      key='zeno'
      ref={navigationLinks.Zeno}
      title='Zeno'
    />
  )

  const scrollRef = useRef()
  useEffect(() => {
    const updateClosestProject = () => {
      const distanceFromWindow = ([_, ref]) => {
        const { left, top } = ref.current.getBoundingClientRect()
        return Math.pow(left, 2) + Math.pow(top, 2)
      }
      const [closestProject] = minBy(Object.entries(navigationLinks), distanceFromWindow)
      setClosestProject(closestProject)
    }
    scrollRef.current.addEventListener('scroll', updateClosestProject)
    updateClosestProject()
    return () => window.removeEventListener('scroll', updateClosestProject)
  }, [])

  return (
    <ThemeContext.Provider value={Themes[closestProject]}>
      <Layout>
        <div
          ref={scrollRef}
          style={{
            scrollSnapType: 'both mandatory',
            overflow: 'auto',
            height: useViewportHeight(),
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column'
          }}
        >
          {cyph}
          {zeno}
          {/* <HireAdi ref={navigationLinks['Hire Adi']} /> */}
        </div>
        <SideNavigation links={navigationLinks} />
      </Layout>
    </ThemeContext.Provider>
  )
}

export default AppsPage
