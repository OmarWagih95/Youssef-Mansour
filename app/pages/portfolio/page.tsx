'use client'
import ProfileTab from '@/app/components/ProfileTab'
import { quoteStyle } from '@/app/styles/styles'
import constants from './../../constants'
import React, { useState } from 'react'
import Image from 'next/image'
import LightBox from '@/app/components/LightBox'

const PortfolioPage = () => {
  const loaderProp =({ src}:{src:string} ) => {
    return src;
}
  const [activeTab,setActiveTab]=useState(0)
  const [index,setIndex]=useState(0)
  const [lightBox,setLightBox]=useState(false)

  const portfolioTabs =[
    {title:'Weddings',value:0},
    {title:'Casual',value:1},
  
  ]
  return (
    <div className={` relative `}>
      <div className={`relative bg-portfolio bg-cover object-cover bg-fixed w-full h-[30vh] lg:h-[50vh] flex justify-center items-center bg-primary`}>
        <span className='w-full  flex justify-center items-center h-full bg-black/55'><h1 
        className={`${quoteStyle} sticky top-16  font-bold`}>PORTFOLIO</h1></span>
          
      </div>
      <div className={`px-2 md:px-4 lg:px-8 xl:px-12 lg:py-8 xl:py-10  w-full bg-darkGrey min-h-screen h-auto`}>
      <div className='w-full justify-center flex gap-6 border-b border-white pb-2 lg:gap-8 overflow-y-hidden scrollbar-hidden' >
          {
            portfolioTabs.map((tab,index)=><ProfileTab key={index} title={tab.title} value={tab.value} activeTab={activeTab} setActiveTab={setActiveTab}/>
            )
          }

        </div>
        <div className='w-full flex-wrap justify-center flex py-4 lg:py-8 h-auto'>
          {constants.sessions[activeTab].map((pic,index)=> <div  className={`hover:cursor-zoom-in relative ${pic.style} object-contain overflow-hidden `} key={index}>
              <Image 
              onClick={()=>{
                setLightBox(true)
                setIndex(index)
              }}
              objectFit='cover'
              objectPosition={pic.position}
              loader={loaderProp}
             fill   alt='' src={pic.path}></Image>
          </div>
          )}
        </div>
      </div>
      {/* {lightBox && <LightBox setIndex={setIndex} activeTab={activeTab} index={index} setLightBox={setLightBox}/>} */}
      {lightBox && <LightBox setIndex={setIndex} activeTab={activeTab} index={index} setLightBox={setLightBox}/>}
    </div>
  )
}

export default PortfolioPage