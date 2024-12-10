'use client'
import React from 'react'
import PhotoCard from '../PhotoCard'
import { motion } from 'framer-motion'
import { fadeIn } from '@/app/variants/fadIn'
import { pagePadding, quoteStyle } from '@/app/styles/styles'

const SaveYourMemories = () => {
  return (
    <div className={` bg-darkGrey  gap-5 md:gap-10 lg:gap-16 xl:gap-24  w-full flex flex-col  justify-center items-center min-h-[50vh] h-auto ${pagePadding}`}>
         
            <motion.div 
                  variants={fadeIn({ direction: 'up', delay: 0.3 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
            className='relative py-5'>
                <PhotoCard image='/moments/m1.JPG' style='absolute z-10 -left-28 sm:-left-40 md:-left-60 bottom-0 -rotate-[15deg]' />
                <PhotoCard image='/moments/m3.JPG' style='absolute z-10 -right-28 sm:-right-40 md:-right-60 bottom-0 rotate-[15deg]' />
                <PhotoCard image='/moments/m2.JPG' style='mb-10' />
            </motion.div>
            <h1 className={`text-backgroundColor  text-center ${quoteStyle}`}>&quot;Life is a collection of moments. Save the ones that matter.&quot;</h1>
    </div>
  )
}

export default SaveYourMemories