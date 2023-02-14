import React from 'react'

import Project from '../project'

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

const GainTain = () =>
  <Project>
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
  </Project>

export default GainTain
