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
    history.pushState({}, '', isPortfolioPage ? '/about' : '/portfolio')
    return !isPortfolioPage
  })
}

const PortfolioPageSwitch = ({ isPortfolioPage, setIsPortfolioPage }: Props): JSX.Element => {
  return (
    <div className='switch-container'>
      <button className='switch-grid' onClick={() => { togglePortfolioPage(setIsPortfolioPage) }}>
        <div
          className='switch-indicator'
          style={{ transform: isPortfolioPage === true ? undefined : 'translateX(100%)' }}
        />
        <div className='switch-text'>Portfolio</div>
        <div className='switch-text'>About</div>
      </button>
    </div>
  )
}

export default PortfolioPageSwitch
