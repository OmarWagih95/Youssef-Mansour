import Image from 'next/image'
import React from 'react'

const PhotoCard = ({image,style}:{image:string,style:string}) => {
  return (
    <div
    
    className={`${style}  h-[20vh] sm:h-[30vh]  md:h-[40vh] xl:h-[60vh] pt-2 flex justify-center w-[30vw] md:w-[25vw] xl:w-[25vw] bg-white`}>
        <div 
      style={{aspectRatio:7/9}}
        className=' relative  h-[75%] w-[90%]'>
        <Image fill objectFit='cover' alt='' src={image}></Image>
        </div>
    </div>
  )
}

export default PhotoCard