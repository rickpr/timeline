import { Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import useAnimateOnScroll from '../../../hooks/use_animate_on_scroll'

import SideNavigation from './side_navigation'
import Timeline from '../../timeline'
import TimelineDescription from '../../timeline/timeline_description'

import meow_wolf_home from '../meow_wolf_home.png'
import face_img from '../face.png'
import donor_page from '../donor_page.png'
import down_arrow from './down_arrow.svg'
import wireframe from './wireframe.png'

const AppsPage = () => {
  useAnimateOnScroll()
  const civicRef = useRef(null)
  const meowWolfRef = useRef(null)
  const heliosRef = useRef(null)
  const scrollToMeowWolf = () => meowWolfRef.current.scrollIntoView({behavior: 'smooth'})

  useEffect(() => {
    let lastScrollWindowTop = 0
    const scrollFullPage = event => {
      const topOfMeowWolfSection = meowWolfRef.current.getBoundingClientRect().top
      const topOfWindow = window.pageYOffset || document.documentElement.scrollTop
      const scrollingDown = topOfWindow > lastScrollWindowTop
      lastScrollWindowTop = Math.max(0, topOfWindow)
      if (scrollingDown && topOfWindow < topOfMeowWolfSection) scrollToMeowWolf()
    }
    window.addEventListener('scroll', scrollFullPage)
    return () => window.removeEventListener('scroll', scrollFullPage)
  }, [])

  // TODO: Use CSS to do this instead
  const innerHeight = () => typeof window === 'undefined' ? 1080 : window.innerHeight;
  const meowWolfHome = <img src={meow_wolf_home} alt="Meow Wolf Homepage" style={{maxHeight: innerHeight() * 0.8}} />
  // const face = <img src={face_img} alt="Civic App Homepage" style={{maxHeight: innerHeight() * 0.8}} className="hero-photo" />
  const face = <div style={{minHeight: '30em', minWidth: '100%'}} className="hero-photo" />
  const rowStyle = {display: 'flex', alignItems: 'center', justifyContent: 'top', minHeight: '100vh', marginTop: '1em'}

  const civicApp =
    <div className="row" style={rowStyle} ref={civicRef}>
      <div
        className="col-sm-6"
        data-aos="fade-down"
        key="civic-app"
        style={{display: 'grid', justifyItems: 'left', gridTemplateColumns: '1fr', gridTemplateRows: 'auto', rowGap: '1em', fontWeight: 'bold'}}
      >
        {/* TODO: remove WTF from classes */}
        <div className="header huge name" style={{padding: 0}}>Civic App</div>
        <div style={{fontSize: '2em'}}>A mobile social experience where users scan politicians and learn about their donors</div>
        <div style={{fontSize: '2em'}}>
        <Link to="/adalida/projects"><span style={{color: '#00000033'}}>OPEN CASE STUDY</span></Link>&nbsp;
          <span style={{color: '#ff2079'}}><FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
      </div>
      <div className="col-sm-6" data-aos="fade-up">
        {face}
      </div>
    </div>


  const meowWolf =
    <div className="row" style={rowStyle} ref={meowWolfRef}>
      <div
        className="col-sm-6"
        data-aos="fade-down"
        key="meow-wolf"
        style={{display: 'grid', justifyItems: 'left', gridTemplateColumns: '1fr', gridTemplateRows: 'auto', rowGap: '1em', fontWeight: 'bold'}}
      >
        {/* TODO: remove WTF from classes */}
        <div className="header huge name" style={{padding: 0}}>Meow Wolf</div>
        <div style={{fontSize: '2em', color: '#FFFFFF'}}>A mobile ticketing experience for a non-linear interactive art museum.</div>
        <div style={{fontSize: '2em'}}>
  <Link to="/adalida/projects"><span style={{color: '#FFFFFFCC'}}>OPEN CASE STUDY</span></Link>&nbsp;
          <span style={{color: '#ff2079'}}><FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
      </div>
      <div className="col-sm-6" data-aos="fade-up">
        {face}
      </div>
    </div>


  const helios =
    <div className="row" style={rowStyle} ref={heliosRef}>
      <div
        className="col-sm-6"
        data-aos="fade-down"
        key="helios"
        style={{display: 'grid', justifyItems: 'left', gridTemplateColumns: '1fr', gridTemplateRows: 'auto', rowGap: '1em', fontWeight: 'bold'}}
      >
        {/* TODO: remove WTF from classes */}
        <div className="header huge name" style={{padding: 0}}>Helios</div>
        <div style={{fontSize: '2em', color: '#FFFFFF'}}>A digital banking user experience for an account sign up.</div>
        <div style={{fontSize: '2em'}}>
  <Link to="/adalida/projects"><span style={{color: '#00000033'}}>OPEN CASE STUDY</span></Link>&nbsp;
          <span style={{color: '#ff2079'}}><FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
      </div>
      <div className="col-sm-6" data-aos="fade-up">
        {face}
      </div>
    </div>

  const navigationLinks = {
    'Civic App': civicRef,
    'Meow Wolf': meowWolfRef,
    Helios: heliosRef,
  }

  return (
    <>
      <div style={{minHeight: '12em'}} />
      <div key="civic-app"><Timeline timelinePosts={[civicApp]} green connected /></div>
      <div style={{backgroundColor: '#000000'}} key="meow-wolf">
        <Timeline timelinePosts={[meowWolf]} green connected />
      </div>
      <div key="helios"><Timeline timelinePosts={[helios]} green connected /></div>
      <div style={{minHeight: '13.5em'}} />
      <SideNavigation links={navigationLinks} />
    </>
  )
}


export default AppsPage
