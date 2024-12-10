'use client'
import React from 'react'
import Image from 'next/image'
import { pagePadding, quoteStyle } from '@/app/styles/styles'
import { motion } from 'framer-motion'
import { fadeIn } from '@/app/variants/fadIn'

const About = () => {
  return (
<div id='About' className={`flex min-h-screen ${pagePadding} w-full flex-col justify-center items-center gap-3 sm:gap-6 bg-backgroundColor md:flex-row`}>
    <motion.div 
       variants={fadeIn({ direction: 'up', delay: 0.3 })}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true, amount: 0.2 }}
    className='flex w-full flex-col justify-center items-center gap-3 sm:gap-6  md:flex-row'>

  <div 
  
  className='relative w-[85vw] h-[50vh] sm:w-[75vw] sm:h-[50vh] md:h-[80vh] md:w-[45vw]'>
    <Image 
      style={{aspectRatio:7/9}}
    className="object-contain" fill alt="YossefMansour" src="/about2.JPG" />
  </div>
  <div className='md:w-[45vw] h-full flex-col justify-start items-center'>
    <h1 className={`${quoteStyle} text-darkGrey`}>Hello, I&apos;m Youssef mansour</h1>
    <p className='text-darkGrey flex-1'>
    Youssef Mansour is a passionate photographer with an eye for capturing moments that tell compelling stories. With a keen interest in both portrait and landscape photography, he finds beauty in the ordinary and extraordinary alike. His work is characterized by a unique blend of creativity, technical skill, and a deep understanding of light and composition. Youssef takes pride in bringing out the personality of his subjects, ensuring that every shot conveys emotion and authenticity. Whether it&apos;s a candid moment or a carefully curated scene, he has the ability to freeze time and make it unforgettable. Youssef’s photography journey started from a personal love for capturing the world around him, and over time, he has honed his craft into a professional career. His portfolio spans various genres, from intimate portraits to breathtaking landscapes, always marked by his attention to detail and commitment to quality. Youssef’s work has earned him recognition and appreciation from clients and fellow photographers alike. He believes that photography is not just about taking pictures, but about creating lasting memories that evoke feelings for years to come. With every project, Youssef continues to grow as an artist, always striving to push the boundaries of his creativity.
    </p>
  </div>
    </motion.div>
</div>

  )
}

export default About