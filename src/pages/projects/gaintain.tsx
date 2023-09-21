import React from 'react'
import 'sass/custom.scss'

import { Projects } from 'theme_context'

import GainTain from 'components/adalida_page/projects/gaintain'
import Layout from 'components/adalida_page/projects/layout'

const GainTainPage = (): JSX.Element =>
  <Layout project={Projects.GainTain}><GainTain /></Layout>

export default GainTainPage
