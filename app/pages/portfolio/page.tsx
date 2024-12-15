import { pagePadding } from '@/app/styles/styles'
import React from 'react'

const PortfolioPage = () => {
  return (
    <div className={`${pagePadding}  `}>
      <div className='w-full h-[10vh] lg:h-[30vh] flex justify-center items-center bg-primary'>
          <h1>PORTFOLIO</h1>
      </div>
    </div>
  )
}

export default PortfolioPage