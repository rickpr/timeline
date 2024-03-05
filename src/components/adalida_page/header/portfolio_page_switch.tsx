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
  isPortfolioPage?: boolean
  setIsPortfolioPage?: (updatePortfolioPage: boolean | ((isPortfolioPage: boolean) => boolean)) => void
}

const togglePortfolioPage = (
  setIsPortfolioPage?: (updatePortfolioPage: (isPortfolioPage: boolean) => boolean) => void
): void => {
  if (setIsPortfolioPage === undefined) return

  setIsPortfolioPage((isPortfolioPage: boolean) => {
    history.pushState({}, '', isPortfolioPage ? '/person' : '/portfolio')
    return !isPortfolioPage
  })
}

const PortfolioPageSwitch = ({ isPortfolioPage, setIsPortfolioPage }: Props): JSX.Element => {
  return (
    <div style={containerStyle}>
      <button style={switchGridStyle} onClick={() => { togglePortfolioPage(setIsPortfolioPage) }}>
        <div style={switchTextStyle}>About</div>
        <div style={switchTextStyle}>Portfolio</div>
        <div
          style={{
            ...glassStyles,
            position: 'absolute',
            backdropFilter: undefined,
            WebkitBackdropFilter: undefined,
            border: '1px solid rgba(255, 255, 255, 0.25)',
            width: '50%',
            height: '100%',
            transition: 'all 0.2s ease-in-out',
            left: 0,
            transform: isPortfolioPage === true ? 'translateX(100%)' : undefined
          }}
        />
      </button>
    </div>
  )
}

export default PortfolioPageSwitch
