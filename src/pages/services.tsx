import React from 'react'

import Layout from 'components/layout'
import ServicesPage from 'components/services_page'
import FacetThemes from 'facet_themes'
import useDarkMode from 'hooks/use_dark_mode'

const Services = (): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <Layout theme={FacetThemes.Services} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <ServicesPage />
    </Layout>
  )
}

export const Head = (): JSX.Element => <title>Services</title>
export default Services
