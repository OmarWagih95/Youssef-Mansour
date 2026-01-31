import { greatVibes } from '@/app/layout'
import { pagePadding, quoteStyle } from '@/app/styles/styles'
import Link from 'next/link'
import React from 'react'

const SaveYourDate = () => {
  return (
    <div  className={`${pagePadding} pt-44 pb-24 lg:py-20 xl:py-32 text-primary ${greatVibes.className} md:min-h-screen bg-saveMob md:bg-saveDesktop bg-cover  bg-backgroundColor flex flex-col gap-4 lg:gap-8 justify-center items-center`}>
     <h1 className={`${quoteStyle} `}>Booking Now For 2026</h1>
    <div className=' flex flex-col gap-1 md:gap-4 lg:w-1/2 justify-center items-center px-4 py-3'>
    <h1 className={`${quoteStyle} `}>Save</h1>
    <h1 className={`${quoteStyle} `}>your </h1>
    <h1 className={`${quoteStyle} `}>date </h1>
    <h1 className={`${quoteStyle} `}>now</h1>
    
    </div>
    <Link className={`${quoteStyle} hover:scale-110 px-4 py-2 hover:cursor-pointer underline font-bold`} href={'pages/contact-us'}>Let&apos;s connect</Link>
    </div>
  )
}

export default SaveYourDate