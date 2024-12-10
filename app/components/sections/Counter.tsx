'use client'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import CountUp from 'react-countup';
import { FaEarthAfrica } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
// import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";





const Counter = () => {
    const counters = [
        {text:'YEARS OF EXPERIENCE',cs:0,ce:9 ,icon:<FaEarthAfrica />,duration:7},
        {text:'EVENT',cs:40,ce:253,icon:<MdEventAvailable />,duration:8},
        // {text:'NUMBER OF EVENTS',cs:40,ce:100,icon:<FaMartiniGlassCitrus />,duration:10},
        {text:'PROFESSIONALS',cs:0,ce:100,icon:<MdGroups />
            ,duration:10},
    ]
    const ref =useRef(null);
    const isInView =useInView(ref);
  return (
    <div  className='bg py-10 px-10 md:py-5 h-auto sm:h-[40vh] gap-10 bg-primary flex justify-center sm:justify-around items-center flex-col sm:flex-row'>
        {counters.map((counter,index)=>
        <div ref={ref} key={index} className='text-4xl p-4 w-max sm:w-1/3 md:text-6xl font-bold gap-1 md:gap-2 flex flex-col justify-center items-center text-white'>
        
            {/* {counter.icon} */}
            <div className='flex gap-1 justify-between items-center'>
        {
        isInView &&
        <CountUp className='text-white font-bold  ' start={counter.cs} end={counter.ce} duration={6}></CountUp>
    }
        {counter.ce>100? '' : <h1 className='font-normal text-2xl sm:text-4xl'>+</h1>}
            </div>
       <h1 className='text-sm md:text-lg font-normal'>{counter.text}</h1>
        </div>
        )}
    </div>
  )
}

export default Counter