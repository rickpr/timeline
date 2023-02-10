
import React from 'react'

import Header from './header'
import About from './about'
import Think from './think'
import Make from './make'
import Check from './check'
import PdfOfWorkouts from './pdf_of_workouts'
import Timer from './timer'
import NotesAndPaper from './notes_and_paper'
import WorkoutLibrary from './workout_library'
import NextSteps from './next_steps'
import Paragraphs from './paragraphs'

import Footer from './footer'
import SocialFooter from './social_footer'

const GainTain = () =>
  <div style={{ background: '#FAFAFA' }}>
    <Header />
    <About />
    <Think />
    <Make />
    <Check />
    <PdfOfWorkouts />
    <Timer />
    <NotesAndPaper />
    <WorkoutLibrary />
    <NextSteps />
    <Paragraphs />
    <Footer />
    <SocialFooter />
  </div>

export default GainTain
