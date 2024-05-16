import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import ServicesPage from 'components/services_page'
import { Themes } from 'themes'
import useDarkMode from 'hooks/use_dark_mode'

const Services = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={Themes.Services} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <ServicesPage />
    </Layout>
  )
}

export const Head = (): JSX.Element => <SEO title='Services' />
export default Services
