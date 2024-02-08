import React from 'react'

import ProfessionPageSwitch from './profession_page_switch'
import DarkModeButton from './dark_mode_button'
import HomeLink from './home_link'
import BackButton from './back_button'
import { glassStyles } from '../styles'

interface Props {
  isProfessionPage?: boolean
  setIsProfessionPage?: (updateProfessionPage: boolean | ((isProfessionPage: boolean) => boolean)) => void
}

export const headerPixels = 80

const Header = ({ isProfessionPage, setIsProfessionPage }: Props): JSX.Element => {
  const isHomePage = setIsProfessionPage !== undefined
  const { backdropFilter } = glassStyles
  return (
    <>
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 7.5dvw',
        height: `${headerPixels}px`,
        backdropFilter
      }}>
        {isHomePage ? <HomeLink /> : <BackButton />}
        {isHomePage && <ProfessionPageSwitch isProfessionPage={isProfessionPage} setIsProfessionPage={setIsProfessionPage} />}
        <DarkModeButton />
      </div>
    </>
  )
}

export default Header
