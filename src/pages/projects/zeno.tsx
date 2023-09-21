import React from 'react'
import 'sass/custom.scss'

import { Projects } from 'theme_context'

import Layout from 'components/adalida_page/projects/layout'
import Zeno from 'components/adalida_page/projects/zeno'

const ZenoPage = (): JSX.Element => <Layout project={Projects.Zeno}><Zeno /></Layout>

export default ZenoPage
