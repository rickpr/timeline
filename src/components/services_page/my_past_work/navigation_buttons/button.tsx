import React, { useContext } from 'react'

import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

const Button = ({ direction = 'right', onClick }: { direction: 'left' | 'right', onClick: () => void }): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(themeContext.darkMode, themeContext)
  return (
    <button style={{ color }} className='services-navigation-button' onClick={onClick}>
      <div style={{ transform: direction === 'left' ? 'rotate(180deg)' : undefined }}>
        <svg width='85%' height='85%' viewBox='-1 -1 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 0L4 0L6 3L4 6L0 6L2 3Z' stroke='currentColor' strokeWidth='2' fill='currentColor' strokeLinejoin='round' />
        </svg>
      </div>
    </button>
  )
}

export default Button
