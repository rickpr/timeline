import { Link } from 'gatsby'
import React, { useEffect } from 'react'

import useAOS from '../../../hooks/useAOS'

import Timeline from '../../timeline'
import TimelineDescription from '../../timeline/timeline_description'

import meow_wolf_home from '../meow_wolf_home.png'
import donor_page from '../donor_page.png'
import down_arrow from './down_arrow.svg'

const ProjectsPage = () => {
  useAOS()
  const scrollToAbout = () => document.getElementById('about-the-project').scrollIntoView({behavior: 'smooth'})

  useEffect(() => {
    let lastScrollWindowTop = 0
    const scrollFullPage = event => {
      const topOfAboutSection = document.getElementById('about-the-project').getBoundingClientRect().top
      const topOfWindow = window.pageYOffset || document.documentElement.scrollTop
      const scrollingDown = topOfWindow > lastScrollWindowTop
      lastScrollWindowTop = Math.max(0, topOfWindow)
      if (scrollingDown && topOfWindow < topOfAboutSection) scrollToAbout()
    }
    window.addEventListener('scroll', scrollFullPage)
    return () => window.removeEventListener('scroll', scrollFullPage)
  }, [])
  const spacer = <div style={{minHeight: '5em', backgroundColor: '#000000'}}></div>
  const meowWolfHome = <img src={meow_wolf_home} alt="Meow Wolf Homepage" />

  const meowWolf =
    <div className="row" style={{display: 'flex', alignItems: 'center'}} >
      <div
        className="col-sm-4"
        data-aos="fade-down"
        key="meow-wolf"
        style={{display: 'grid', justifyItems: 'center', gridTemplateColumns: '1fr', gridTemplateRows: 'auto'}}
      >
        <div className="header meow-wolf">Meow Wolf</div>
        <div style={{height: '10em', backgroundColor: '#000000'}} key="spacer"></div>
        <img src={down_arrow} alt="Down arrow" onClick={scrollToAbout}/>
      </div>
      <div className="col-sm-4" data-aos="fade-up" key="firstMeowWolfImage">
        {meowWolfHome}
      </div>
      <div className="col-sm-4" data-aos="fade-up" key="secondMeowWolfImage">
        {meowWolfHome}
      </div>
    </div>

  const projectInfo =
    <>
      <h3 className="text-primary">ROLE</h3>
      <ul>
        <li>User Experience</li>
        <li>Visual Design</li>
        <li>Prototyping</li>
        <li>User Testing</li>
        <li>Interaction Design</li>
      </ul>
      <h3 className="text-primary">Client</h3>
      <ul>
        <li>Meow Wolf</li>
      </ul>
      <h3 className="text-primary">Date:</h3>
      <ul>
        <li>May 2020 - June 2020</li>
      </ul>
    </>
  const aboutProject =
    <>
      <h1 id="about-the-project">ABOUT THE PROJECT</h1>
      <h1 className="text-primary">Interactive Non-Linear Art Exhibit</h1>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random
      </div>
      <TimelineDescription description={projectInfo}/>
    </>

  const donorPage =
    <>
      <div className="col-sm-5" data-aos="fade-up">
        <img src={donor_page} alt="Donor App"/>
      </div>
      <TimelineDescription title="Donor App" description="This is a time capsule of my design journey" />
    </>

  return (
    <>
      {spacer}
      <div style={{backgroundColor: '#000000'}}>
        <Timeline timelinePosts={[meowWolf]} />
      </div>
      <Timeline timelinePosts={[aboutProject, donorPage]} />
      {spacer}
    </>
  )
}


export default ProjectsPage
