import React from 'react'

import CaseStudy from '../case_study'

import About from './about'
import Think from './think'
import Make from './make'
import Check from './check'
import PdfOfWorkouts from './pdf_of_workouts'
import NotesAndPaper from './notes_and_paper'
import Timer from './timer'
import WorkoutLibrary from './workout_library'
import Personalization from './personalization'
import NextSteps from './next_steps'
import VisualIdentity from './visual_identity'
import Paragraphs from './paragraphs'

const GainTain = (): JSX.Element =>
  <CaseStudy>
    <About />
    <Think />
    <Make />
    <Check />
    <PdfOfWorkouts />
    <NotesAndPaper />
    <Timer />
    <WorkoutLibrary />
    <Personalization/>
    <NextSteps />
    <VisualIdentity />
    <Paragraphs />
  </CaseStudy>

export default GainTain
