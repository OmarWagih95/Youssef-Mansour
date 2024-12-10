'use client'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

const ScrollingCam = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  });

  // Transform scrollYProgress to a range suitable for CSS
//   const width = useTransform(scrollYProgress, [0, 1], ['2vw', '100vw']);
//   const height = useTransform(scrollYProgress, [0, 1], ['2h', '100vh']);
//   const top = useTransform(scrollYProgress, [0, 1], ['50vh', '0vh']);
//   const left = useTransform(scrollYProgress, [0, 1], ['50vw', '0vw']);
  const scale = useTransform(scrollYProgress, [0, 1],[1,2]);  // Example scaling factor

  return (
    <div ref={ref} className='relative bg-darkGrey min-h-screen flex justify-center items-center'>
      <div className={`opacity-${scrollYProgress}`}>
        <Image alt='wiigoEffect' width={200} height={300} src='/oldCam.png' />
      </div>

      {/* Motion div with dynamic styling */}
      <motion.div
        style={{
          scale: scale, // Scales the div based on scroll progress
        //   width: width, // Dynamically adjusts width
        //   height: height, // Dynamically adjusts height
        //   top: top, // Adjusts top position
        //   left: left, // Adjusts left position
        }}
        className='absolute top-7 left-8 w-screen h-screen rounded-full z-10 bg-white'
      />
    </div>
  );
};

export default ScrollingCam;
