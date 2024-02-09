import React from 'react'
import { glassStyles } from '../styles'

const switchGridStyle = {
  color: 'unset',
  display: 'grid',
  background: 'none',
  border: 'none',
  position: 'relative' as const,
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  placeItems: 'center',
  placeContent: 'center',
  gap: '18px',
  padding: '6px 9px',
  minHeight: '100%',
  pointerEvents: 'auto' as const,
  cursor: 'pointer' as const,
  fontFamily: 'Work Sans, sans-serif'
}

const switchTextStyle = {
  lineHeight: 1,
  width: '100%',
  fontWeight: 600
}

const containerStyle = {
  ...glassStyles,
  padding: '6px',
  position: 'absolute' as const,
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'max-content'
}

interface Props {
  isProfessionPage?: boolean
  setIsProfessionPage?: (updateProfessionPage: boolean | ((isProfessionPage: boolean) => boolean)) => void
}

const toggleProfessionPage = (
  setIsProfessionPage?: (updateAboutPage: (isProfessionPage: boolean) => boolean) => void
): void => {
  if (setIsProfessionPage === undefined) return

  setIsProfessionPage((isProfessionPage: boolean) => {
    history.pushState({}, '', isProfessionPage ? '/person' : '/')
    return !isProfessionPage
  })
}

const ProfessionPageSwitch = ({ isProfessionPage, setIsProfessionPage }: Props): JSX.Element => {
  return (
    <div style={containerStyle}>
      <button style={switchGridStyle} onClick={() => { toggleProfessionPage(setIsProfessionPage) }}>
        <div style={switchTextStyle}>Person</div>
        <div style={switchTextStyle}>Profession</div>
        <div
          style={{
            ...glassStyles,
            position: 'absolute',
            backdropFilter: undefined,
            border: '1px solid rgba(255, 255, 255, 0.25)',
            width: '50%',
            height: '100%',
            transition: 'all 0.2s ease-in-out',
            left: 0,
            transform: isProfessionPage === true ? 'translateX(100%)' : undefined
          }}
        />
      </button>
    </div>
  )
}

export default ProfessionPageSwitch
