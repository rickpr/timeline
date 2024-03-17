import React from 'react'

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
    <div className='switch-container'>
      <button className='switch-grid' onClick={() => { togglePortfolioPage(setIsPortfolioPage) }}>
        <div
          className='switch-indicator'
          style={{ transform: isPortfolioPage === true ? 'translateX(100%)' : undefined }}
        />
        <div className='switch-text'>About</div>
        <div className='switch-text'>Portfolio</div>
      </button>
    </div>
  )
}

export default PortfolioPageSwitch
