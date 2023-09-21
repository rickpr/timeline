import React from 'react'
import 'sass/custom.scss'

import { Projects } from 'theme_context'

import Layout from 'components/adalida_page/projects/layout'
import Phronesis from 'components/adalida_page/projects/phronesis'

const PhronesisPage = (): JSX.Element =>
  <Layout project={Projects.phronesis}><Phronesis /></Layout>

export default PhronesisPage
