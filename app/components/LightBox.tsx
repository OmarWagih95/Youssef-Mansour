import React from 'react';
import constants from '../constants';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';
import { useSwipeable } from 'react-swipeable';

const LightBox = ({ setLightBox, activeTab, index,setIndex }: { setIndex:React.Dispatch<React.SetStateAction<number>>,setLightBox: React.Dispatch<React.SetStateAction<boolean>>, activeTab: number, index: number }) => {
  const loaderProp =({ src}:{src:string} ) => {
    return src;
}
  const handleIndex=(index:number,opr:string)=>{
   if (opr === 'min'){
       
       if(index>0 && opr === 'min'){
           setIndex(index--);
       }
       else{
        setIndex(constants.sessions[activeTab].length-1);
       }
   }
   else if (opr === 'plus'){
    console.log(index)
    if(index<constants.sessions[activeTab].length){
        setIndex(index++);
    } 
    else{
        setIndex(0)
    }
 }
}
const handlers = useSwipeable({
  onSwipedLeft: () => handleIndex(index + 1, 'plus'),
  onSwipedRight: () => handleIndex(index - 1, 'min'),
});

    return (
    <div
      className="w-screen bg-black/85 flex justify-center items-center h-screen fixed top-0 left-0 z-50"
      {...handlers}
    >
      {/* Clickable overlay to close LightBox */}
      <span
        onClick={() => setLightBox(false)}
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
      ></span>

      {/* Centered Image Container */}
      <div className="relative w-full h-screen flex justify-center items-center">
        <span
        onClick={()=>handleIndex(index-1,'min')}
        className='absolute z-50 rounded-full flex justify-center items-center w-10 xl:w-14 xl:h-14 h-10 top-[49vh] left-[1vw] md:left-[2vw] hover:cursor-pointer  text-white md:text-white/50 hover:text-white hover:bg-gray-700/50 md:bg-gray-700/30'><FaArrowLeft />
</span>
        <span
        onClick={()=>handleIndex(index+1,'plus')}
        className='absolute z-50 rounded-full flex justify-center items-center w-10 xl:w-14 xl:h-14 h-10 top-[49vh] right-[1vw] md:right-[2vw] hover:cursor-pointer text-white md:text-white/50 hover:text-white hover:bg-gray-700/50 md:bg-gray-700/30'><FaArrowRight />
</span>
        <span
        onClick={()=>setLightBox(false)}
        className='absolute z-50 rounded-full flex justify-center items-center w-8 xl:w-12 xl:h-12 h-8 top-[2vh] right-[2vw] hover:cursor-pointer bg-gray-700/30'><IoClose />


</span>
  <Image
  loader={loaderProp}
    src={constants.sessions[activeTab][index].path}
    alt=""
    fill
    style={{
      objectFit: 'contain', // Maintains aspect ratio, image fits within the height
    }}
  />
</div>

    </div>
  );
};

export default LightBox;
